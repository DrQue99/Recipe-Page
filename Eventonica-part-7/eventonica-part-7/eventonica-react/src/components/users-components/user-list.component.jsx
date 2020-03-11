import React from "react";

import "./user-list.styles.css";

export const UserList = props => {
  return <div className='user-list'>{props.children}</div>;
};
