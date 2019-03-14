import React from "react";

const InputForm = () => {
  return (
    <form>
      <div className="form-group m-2" style={{ maxWidth: "12rem" }}>
        <input
          type="text"
          className="form-control is-valid"
          id="exampleFormControlInput1"
          placeholder="Username"
        />
      </div>
      <div className="form-group m-2" style={{ maxWidth: "24rem" }}>
        <textarea
          className="form-control is-valid"
          id="exampleFormControlTextarea1"
          placeholder="Chirp text..."
          rows="3"
        />
      </div>
    </form>
  );
};

export default InputForm;
