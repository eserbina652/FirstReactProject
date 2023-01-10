import React from "react";
import "./popup.css";
import TicketsHeader from "../ticketsValidations/right-card/components/ticketsComponents/header/TicketsHeader";
import PopupForm from "./components/PopupForm";
import CloseButton from "../../components/Button/CloseButton";
import { useDispatch, useSelector } from "react-redux";
import { actionOnClose } from "../../store/vanillaRedux/popups/actions/popupsActions";

const Popup = () => {
  const popupItem = useSelector((state) => state.popups.item);
  const dispatch = useDispatch();
  const closePopup = () => {
    dispatch(actionOnClose());
  };
  return (
    <div className="popup-wrapper">
      <div className="popup-little-window">
        <CloseButton onClick={closePopup} />
        <div className="popup-header">
          <h3 className="header-title">Your ticket</h3>
        </div>
        <TicketsHeader item={popupItem} />
        <h4 className="form-title">
          Please fill out the form, if you want to buy a ticket
        </h4>
        <div className="popup-form-wrapper">
          <PopupForm item={popupItem} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
