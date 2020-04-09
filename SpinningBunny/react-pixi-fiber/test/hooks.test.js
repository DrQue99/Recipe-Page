import React, { useLayoutEffect } from "react";
import renderer from "react-test-renderer";
import * as PIXI from "pixi.js";
import { Container } from "../src/index";
import { usePixiApp, usePixiTicker, usePreviousProps, usePixiAppCreator } from "../src/hooks";
import { __RewireAPI__ as HooksRewireAPI } from "../src/hooks";
import { AppContext } from "../src/AppProvider";
import { createRender } from "../src/render";
import { ReactPixiFiberAsSecondaryRenderer } from "../src/ReactPixiFiber";

const render = createRender(ReactPixiFiberAsSecondaryRenderer);

describe("usePixiApp", () => {
  it("will provide app from the context above", () => {
    const app = new PIXI.Application();

    const TestComponent = jest.fn(() => null);

    const HookContainer = () => {
      const app = usePixiApp();

      return (
        <Container>
          <TestComponent app={app} />
        </Container>
      );
    };

    render(
      <AppContext.Provider value={app}>
        <HookContainer />
      </AppContext.Provider>,
      app.stage
    );

    expect(TestComponent).toHaveBeenCalledWith({ app }, {});
  });
});

describe("usePixiTicker", () => {
  it("will add the callback to the app.ticker", () => {
    const app = new PIXI.Application();
    const fn = jest.fn();
    const add = jest.spyOn(app.ticker, "add");

    const TestComponent = () => {
      usePixiTicker(fn);

      return <Container />;
    };

    const tree = renderer.create(
      <AppContext.Provider value={app}>
        <TestComponent />
      </AppContext.Provider>
    );

    // trigger useEffect because that's when usePixiTicker
    // calls `app.ticker.add`
    tree.update();

    expect(add).toHaveBeenCalledTimes(1);
    expect(add).toHaveBeenCalledWith(fn);
  });

  it("will remove the callback from the app.ticker as a cleanup", () => {
    const app = new PIXI.Application();
    const fn = jest.fn();
    const remove = jest.spyOn(app.ticker, "remove");

    const TestComponent = () => {
      usePixiTicker(fn);

      return <Container />;
    };

    const tree = renderer.create(
      <AppContext.Provider value={app}>
        <TestComponent />
      </AppContext.Provider>
    );

    // trigger useEffect cleanup because that's when usePixiTicker
    // calls `app.ticker.remove`
    tree.unmount();

    expect(remove).toHaveBeenCalledWith(fn);
  });
});

describe("usePreviousProps", () => {
  it("will provide last props on rerender", () => {
    const mock = jest.fn();
    const props = {
      prop1: "foo",
      prop2: "bar",
    };

    const TestComponent = props => {
      const prevProps = usePreviousProps(props);

      useLayoutEffect(() => {
        mock(prevProps);
      });

      return null;
    };

    const tree = renderer.create(<TestComponent {...props} />);
    expect(mock).toHaveBeenCalledWith({});
    // useEffect isn't triggered until after this update
    tree.update(<TestComponent {...props} />);
    expect(mock).toHaveBeenCalledWith(props);
    expect(mock).toHaveBeenCalledTimes(2);
  });
});

describe("usePixiAppCreator", () => {
  const createPixiApplication = jest.fn(options => new PIXI.Application(options));

  beforeEach(() => {
    HooksRewireAPI.__Rewire__("createPixiApplication", createPixiApplication);
    createPixiApplication.mockClear();
  });

  afterEach(() => {
    HooksRewireAPI.__ResetDependency__("createPixiApplication");
  });

  it("will provide app and canvas", done => {
    const props = {
      width: 400,
      height: 400,
    };
    const TestComponent = jest.fn(() => null);

    const TestContainer = props => {
      const { app, canvas } = usePixiAppCreator(props);

      useLayoutEffect(() => {
        expect(TestComponent).toHaveBeenCalledWith({ app, canvas }, {});
        done();
      });

      return <TestComponent app={app} canvas={canvas} />;
    };

    render(<TestContainer {...props} />);
  });
});
