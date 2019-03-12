import React, { Component } from "react";

class MessageBox extends Component {
  state = {};

  cardStyle = {
    maxWidth: "18rem"
  };

  render() {
    return (
      <div className="card border-primary mb-3 m-2" style={this.cardStyle}>
        <div className="card-body text-primary">
          <h5 className="card-title">Primary card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the
          </p>
        </div>
      </div>
    );
  }
}

export default MessageBox;
