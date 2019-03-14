import React, { Component } from "react";
import MessageBox from "./messageBox";
import InputForm from "./inputForm";

class MessageContainer extends Component {
  state = {
    messages: [
      {
        id: "1",
        author: "Joe Schmo",
        messageText:
          "This is chirp one. It goes on for a while--inserts some random commentary here--and then stops."
      },
      {
        id: "2",
        author: "Jane Doe",
        messageText:
          "This is chirp number two. It will continue to expound about nothing, and then trail off into..."
      },
      {
        id: "3",
        author: "Jack Black",
        messageText:
          "This is the third chirp, but it is not the least of chirps. New user, what do you have to say about all of this?"
      }
    ],

    newAuthor: "",
    newMessageText: ""
  };

  //the two methods below take the target values on change
  //and set them as the state values.
  handleAuthorChange = author => {
    this.setState({ newAuthor: author });
    console.log(this.state.newAuthor);
  };

  handleMessageChange = messageText => {
    this.setState({ newMessageText: messageText });
    console.log(this.state.newMessageText);
  };

  render() {
    return (
      <div>
        <InputForm
          onAuthorChange={this.handleAuthorChange}
          onMessageChange={this.handleMessageChange}
          author={this.state.newAuthor}
          messageText={this.state.newMessageText}
        />
        <MessageBox messages={this.state.messages} />
      </div>
    );
  }
}

export default MessageContainer;
