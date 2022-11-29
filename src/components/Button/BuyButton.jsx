import React from "react";
import "./buyButton.css";

const BuyButton = ({ addValueInPopup, item, getPrise, getCurrencySymbol }) => {
  return (
    <div>
      <button
        onClick={() => addValueInPopup(item)}
        className="button-for-buy-a-ticket"
      >
        Buy for {getPrise()} {getCurrencySymbol()}
      </button>
    </div>
  );
};

export default BuyButton;
