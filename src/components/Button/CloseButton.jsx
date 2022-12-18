import React from "react";
import "./closeButton.css";
import { useDispatch } from "react-redux";
import { onClose, onCloseSuccess } from "../../store/reducers/popups";

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
