import React from "react";

const InputForm = props => {
  const {
    onAuthorChange,
    onMessageChange,
    // newAuthor,
    // newMessageText,
    handleSubmit
  } = props;

  return (
    <form>
      <div className="form-group m-2" style={{ maxWidth: "12rem" }}>
        <input
          id="nameField"
          type="text"
          className="form-control"
          placeholder="Name"
          //   value={newAuthor}
          onChange={event => onAuthorChange(event.target.value)}
        />
      </div>
      <div className="form-group m-2" style={{ maxWidth: "24rem" }}>
        <textarea
          id="messageField"
          className="form-control"
          placeholder="Chirp text..."
          rows="3"
          //   value={newMessageText}
          onChange={event => onMessageChange(event.target.value)}
        />
      </div>
      <button type="button" onClick={handleSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default InputForm;
