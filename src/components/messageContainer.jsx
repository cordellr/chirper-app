import React, { Component } from "react";
import MessageBox from "./messageBox";

class MessageContainer extends Component {
  state = {
    messages: [
      { id: "1", author: "Joe Schmo", messageText: "This is chirp one." },
      { id: "2", author: "Jane Doe", messageText: "This is chirp number two." },
      { id: "3", author: "Jack Black", messageText: "This is the third chirp." }
    ]
  };

  render() {
    //console.log(this.state.messages[1].id);
    return <MessageBox />;
  }
}

export default MessageContainer;
