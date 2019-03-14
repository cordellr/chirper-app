import React, { Component } from "react";

class InputForm extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group m-2" style={{ maxWidth: "12rem" }}>
          <input
            type="text"
            className="form-control is-valid"
            placeholder="Name"
          />
        </div>
        <div className="form-group m-2" style={{ maxWidth: "24rem" }}>
          <textarea
            className="form-control is-valid"
            placeholder="Chirp text..."
            rows="3"
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
