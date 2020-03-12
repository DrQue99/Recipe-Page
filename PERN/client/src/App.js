import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:3000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>Animal Sightings</header>
        <h1 className='App-title'></h1>
        <p className='Animal Sightings'>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
