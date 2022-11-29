import React from "react";
import "./form.css";

const PopupForm = () => {
  return (
    <div className="popup-middle">
      <form
        className="popup-form"
        action="/react/first-project-of-react/public"
      >
        <input
          className="form-input"
          type="text"
          placeholder="write your name"
        />
        <input
          className="form-input"
          type="text"
          placeholder="write your surname"
        />
        <input
          className="form-input"
          type="email"
          placeholder="write your e-mail"
        />
        <input
          className="form-input"
          type="number"
          placeholder="write your phone number"
        />
        <input
          className="form-input"
          type="number"
          placeholder="write your passport series"
        />
      </form>
    </div>
  );
};

export default PopupForm;
