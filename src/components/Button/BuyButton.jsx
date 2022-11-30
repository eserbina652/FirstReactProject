import React from "react";
import "./buyButton.css";
// import { getCurrencySymbol, getPrise } from "../../utils/functionFromTicket.js";
import { getPrise, getCurrencySymbol } from "../../utils/functionFromTicket.js";
// import { getCurrencySymbol } from "../../utils/functionFromTicket.js";

const BuyButton = ({ addValueInPopup, item, value, onChangeValue, str }) => {
  return (
    <div>
      <button
        onClick={() => {
          addValueInPopup(item);
          onChangeValue(str);
        }}
        className="button-for-buy-a-ticket"
      >
        Buy for {getPrise(item, value)} {getCurrencySymbol(item)}
      </button>
    </div>
  );
};

export default BuyButton;
