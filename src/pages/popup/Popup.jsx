import React from "react";
import "./popup.css";
import TicketsHeader from "../ticketsValidations/right-card/components/ticketsComponents/header/TicketsHeader";
import PopupForm from "./components/PopupForm";
import CloseButton from "../../components/Button/CloseButton";
import BuyButton from "../../components/Button/BuyButton";

const Popup = ({ item, addValueInPopup, value, closePopup }) => {
  console.log("item", item);
  return (
    <div className="popup-wrapper">
      <div className="popup-little-window">
        <CloseButton closePopup={closePopup} />
        <div className="popup-header">
          <h3 className="header-title">Your ticket</h3>
        </div>
        <TicketsHeader item={item} />
        <h4 className="form-title">
          Please fill out the form, if you want to buy a ticket
        </h4>
        <div className="popup-form-wrapper">
          <PopupForm
            addValueInPopup={addValueInPopup}
            item={item}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
