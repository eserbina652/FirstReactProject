import React from "react";
import "./buyButton.css";
// import { getCurrencySymbol, getPrise } from "../../utils/functionFromTicket.js";
import { getPrise, getCurrencySymbol } from "../../utils/functionFromTicket.js";
// import { getCurrencySymbol } from "../../utils/functionFromTicket.js";

const BuyButton = ({ item, value, additionalStyle, onClick }) => {
  return (
    <div>
      <button
        onClick={() => onClick()}
        className="button-for-buy-a-ticket"
        id={additionalStyle}
      >
        Buy for {getPrise(item, value)} {getCurrencySymbol(value)}
      </button>
    </div>
  );
};

export default BuyButton;
