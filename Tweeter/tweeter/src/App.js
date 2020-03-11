import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  handleMessageChange = event => {
    this.setState({ message: event.target.value });
  };

  render() {
    const message = this.state.message,
      maxCharacterCount = 100,
      currentCharacterCount = message.length;

     

    return (
      <div>
        <h1>Tweeter</h1>

        <label for='entryform'>Text Form</label>
        <form name='entryform' id='entry-form'>
          <select name='usernames' id='usernames'>
            <option value='_user1'>User1</option>
            <option value='_user2'>User2</option>
            <option value='_user3'>User3</option>
            <option value='_user4'>User4</option>
            <option value='_user5'>User5</option>
          </select>{" "}
          <br />
          <textarea
            value={message}
            onChange={this.handleMessageChange}
          ></textarea>
          <br />
          <span id = "character" > 
          Character Count: {overCharacterLimit} 
          {currentCharacterCount <= maxCharacters && currentCharacterCount >= 100 
          : <span style={{color: "red"}}> Over Character Limit!</span>
          }
             </span>
          <input type='submit' value='Submit'></input>
          <br />
        </form>
      </div>
    );
  }
}

export default App;
