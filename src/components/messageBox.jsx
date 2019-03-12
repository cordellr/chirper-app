import React from "react";
//import { getMessages } from "./messageContainer";

const MessageBox = props => {
  const cardStyle = {
    maxWidth: "18rem"
  };

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="card border-primary mb-3" style={cardStyle}>
          <div className="card-body text-primary">
            <h5 className="card-title">Primary card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on
              the
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default MessageBox;
