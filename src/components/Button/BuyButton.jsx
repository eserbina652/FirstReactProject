import React from "react";
import "./buyButton.css";
import { getPrise, getCurrencySymbol } from "../../utils/functionFromTicket.js";
import { useDispatch, useSelector } from "react-redux";
import { onOpen } from "../../store/reducers/popups";

const BuyButton = ({ item, additionalStyle }) => {
  const currency = useSelector((state) => state.tickets.currency);
  const dispatch = useDispatch();

  const openPopup = () => {
    dispatch(onOpen());
  };
  return (
    <div>
      <button
        onClick={() => {
          openPopup();
        }}
        className="button-for-buy-a-ticket"
        id={additionalStyle}
      >
        Buy for {getPrise(item, currency)} {getCurrencySymbol(currency)}
      </button>
    </div>
  );
};

export default BuyButton;
