import React, { useState } from "react";
import "./popup.css";
import TicketsHeader from "../ticketsValidations/right-card/components/ticketsComponents/header/TicketsHeader";
import PopupForm from "./components/PopupForm";
import CloseButton from "../../components/Button/CloseButton";
import BuyButton from "../../components/Button/BuyButton";
import Error from "../../errors/Error";
// import { getCurrencySymbol, getPrise } from "../../utils/functionFromTicket.js";
import { getCurrencySymbol, getPrise } from "../../utils/functionFromTicket.js";
// import { getPrise } from "../../utils/functionFromTicket.js";

// import ButtonForBuyTicket from "../../components/Button/ButtonForBuyTicket";

const Popup = ({ item, addValueInPopup, value }) => {
  // const [formValue, setFormValue] = useState();
  //
  // const errCheck = () => {};
  return (
    <div className="popup-wrapper">
      <div className="popup-little-window">
        <CloseButton />
        <div className="popup-header">
          <h3 className="header-title">Your ticket</h3>
        </div>
        <TicketsHeader item={item} />
        <h4 className="form-title">
          Please fill out the form, if you want to buy a ticket
        </h4>
        <div className="popup-form-wrapper">
          <PopupForm />
          <div className="err-wrapper">
            <Error />
            <Error />
            <Error />
            <Error />
            <Error />
          </div>
        </div>
        <BuyButton
          getPrise={getPrise}
          getCurrencySymbol={getCurrencySymbol}
          item={item}
          value={value}
          addValueInPopup={addValueInPopup}
        />
      </div>
    </div>
  );
};

export default Popup;
