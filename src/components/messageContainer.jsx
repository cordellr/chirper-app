import React, { Component } from "react";
import MessageBox from "./messageBox";
import InputForm from "./inputForm";

class MessageContainer extends Component {
  state = {
    messages: [
      {
        id: 1,
        author: "Joe Schmo",
        messageText:
          "This is chirp one. It goes on for a while--inserts some random commentary here--and then stops."
      },
      {
        id: 2,
        author: "Jane Doe",
        messageText:
          "This is chirp number two. It will continue to expound about nothing, and then trail off into..."
      },
      {
        id: 3,
        author: "Jack Black",
        messageText:
          "This is the third chirp, but it is not the least of chirps. New user, what do you have to say about all of this?"
      }
    ],

    id: 4,
    author: "",
    messageText: ""
  };

  //the two methods below take the target values on change
  //from inputForm and set them as the state values.
  handleAuthorChange = author => {
    this.setState({ author });
    console.log(this.state.author);
  };

  handleMessageChange = messageText => {
    this.setState({ messageText });
    console.log(this.state.messageText);
  };

  //This method looks confusing, but it's simply
  //cloning the original messages array in state with the spread operator
  //and adding a new object with the values entered in the form.
  handleSubmit = () => {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          id: this.state.id,
          author: this.state.author,
          messageText: this.state.messageText
        }
      ]
    });
  };

  render() {
    return (
      <div>
        <InputForm
          onAuthorChange={this.handleAuthorChange}
          onMessageChange={this.handleMessageChange}
          //   author={this.state.author}
          //   messageText={this.state.messageText}
          handleSubmit={this.handleSubmit}
        />
        <MessageBox messages={this.state.messages} />
      </div>
    );
  }
}

export default MessageContainer;
