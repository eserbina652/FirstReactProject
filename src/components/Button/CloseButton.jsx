import React from "react";
import "./closeButton.css";

const CloseButton = ({ onClick }) => {
  return (
    <div className="close-button-wrapper">
      <button onClick={onClick} className="close-button">
        x
      </button>
    </div>
  );
};

export default CloseButton;
