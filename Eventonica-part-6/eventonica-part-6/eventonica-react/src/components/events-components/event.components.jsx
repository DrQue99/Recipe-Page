import React from "react";

import "./event.styles.css";

export const Event = () => (
  <div className='event-container'>
    <h1> {props.events.event_name} </h1>
  </div>
);
