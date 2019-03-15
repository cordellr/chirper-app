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
          type="text"
          className="form-control"
          placeholder="Name"
          //   value={newAuthor}
          onChange={onAuthorChange}
        />
      </div>
      <div className="form-group m-2" style={{ maxWidth: "24rem" }}>
        <textarea
          className="form-control"
          placeholder="Chirp text..."
          rows="3"
          //   value={newMessageText}
          onChange={onMessageChange}
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="btn btn-primary m-2"
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm;
