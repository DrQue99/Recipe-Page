import React, { Component } from "react";

import { UserList } from "./components/users-components/user-list.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/users")
      .then(response => response.json())
      .then(users => this.setState({ users: users }));
  }

  render() {
    return (
      <div className='App'>
        <UserList name='Users'>
          {this.state.users.map(user => (
            <h1 key={user.id}>{user.name}</h1>
          ))}
        </UserList>
      </div>
    );
  }
}

export default App;
