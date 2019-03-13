import React from "react";
//import { getMessages } from "./messageContainer";

const MessageBox = props => {
  const { messages } = props;

  //console.log(messages[0].id);

  return (
    <ul className="list-group">
      {messages.reverse().map(message => (
        <li className="list-group-item" style={{ border: "none" }}>
          <div
            className="card border-primary mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body text-primary">
              <h5 className="card-title">{message.author}</h5>
              <p className="card-text">{message.messageText}</p>
            </div>
          </div>
        </li>
      ))}
      ;
    </ul>
  );
};

export default MessageBox;
