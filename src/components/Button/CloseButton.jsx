import React from "react";
import "./closeButton.css";

const CloseButton = ({ closePopup }) => {
  return (
    <div className="close-button-wrapper">
      <button onClick={() => closePopup()} className="close-button">
        x
      </button>
    </div>
  );
};

export default CloseButton;
