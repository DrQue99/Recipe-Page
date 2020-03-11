import React from "react";

import "./event-list.styles.css";

export const EventList = props => {
  return <div className='event-list'>{props.children}</div>;
};
