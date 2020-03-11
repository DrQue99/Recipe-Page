import React from "react";

import "./card.styles.css";

export const User = () => (
  <div className='user-container'>
    <h1> {props.users.name} </h1>
  </div>
);
