import React from "react";
import "./popup.css";
import TicketsHeader from "../ticketsValidations/right-card/components/ticketsComponents/header/TicketsHeader";
import PopupForm from "./components/PopupForm";
import CloseButton from "../../components/Button/CloseButton";
import { useDispatch } from "react-redux";
import { onClose } from "../../store/reducers/popups";

const Popup = () => {
  const dispatch = useDispatch();
  const closePopup = () => {
    dispatch(onClose());
  };
  return (
    <div className="popup-wrapper">
      <div className="popup-little-window">
        <CloseButton onClick={() => closePopup()} />
        <div className="popup-header">
          <h3 className="header-title">Your ticket</h3>
        </div>
        <TicketsHeader />
        <h4 className="form-title">
          Please fill out the form, if you want to buy a ticket
        </h4>
        <div className="popup-form-wrapper">
          <PopupForm />
        </div>
      </div>
    </div>
  );
};

export default Popup;
