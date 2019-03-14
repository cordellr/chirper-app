import React, { Component } from "react";

class InputForm extends Component {
  state = {
    id: "4",
    author: "",
    messageText: ""
  };

  //the two methods below take the target values on change
  //and set them as the state values.
  onAuthorChange = author => {
    this.setState({ author });
    console.log(this.state.author);
  };

  onMessageChange = messageText => {
    this.setState({ messageText });
    console.log(this.state.messageText);
  };

  render() {
    return (
      <form>
        <div className="form-group m-2" style={{ maxWidth: "12rem" }}>
          <input
            type="text"
            className="form-control is-valid"
            placeholder="Name"
            value={this.state.author}
            onChange={event => this.onAuthorChange(event.target.value)}
          />
        </div>
        <div className="form-group m-2" style={{ maxWidth: "24rem" }}>
          <textarea
            className="form-control is-valid"
            placeholder="Chirp text..."
            rows="3"
            value={this.state.messageText}
            onChange={event => this.onMessageChange(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default InputForm;
