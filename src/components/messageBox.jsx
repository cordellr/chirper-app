import React from "react";

const MessageBox = props => {
  //object destructuring
  const { messages } = props;

  //maps the chirps from messages array into list
  //used bootstrap cards to format chirps
  return (
    <ul className="list-group">
      {messages.map(message => (
        <li
          key={message.id}
          className="list-group-item"
          style={{ border: "none" }}
        >
          <div className="card border-info mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header">{message.author}</div>
            <div className="card-body">
              <p className="card-text">{message.messageText}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MessageBox;
