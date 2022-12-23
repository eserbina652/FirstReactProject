import React from "react";
import "./buyButton.css";
import { getPrise, getCurrencySymbol } from "../../utils/functionFromTicket.js";
import { useDispatch, useSelector } from "react-redux";
import { actionOnOpen } from "../../store/vanillaRedux/popups/actions/popupsActions";

const BuyButton = ({ item }) => {
  const currency = useSelector((state) => state.tickets.currency);
  const dispatch = useDispatch();

  const openPopup = (item) => {
    dispatch(actionOnOpen(item));
  };
  return (
    <div>
      <button
        onClick={() => {
          openPopup(item);
        }}
        className="button-for-buy-a-ticket"
      >
        Buy for {getPrise(item, currency)} {getCurrencySymbol(currency)}
      </button>
    </div>
  );
};

export default BuyButton;
