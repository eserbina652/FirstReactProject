import React from "react";
import "./buyButton.css";
import { getPrise, getCurrencySymbol } from "../../utils/functionFromTicket.js";
import { useSelector } from "react-redux";

const BuyButton = ({ item, additionalStyle, onClick }) => {
  const currency = useSelector((state) => state.currency);
  return (
    <div>
      <button
        onClick={() => onClick()}
        className="button-for-buy-a-ticket"
        id={additionalStyle}
      >
        Buy for {getPrise(item, currency)} {getCurrencySymbol(currency)}
      </button>
    </div>
  );
};

export default BuyButton;
