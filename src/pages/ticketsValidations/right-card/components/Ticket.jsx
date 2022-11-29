import React from "react";
import "../rightCard.css";

import TicketsFooter from "./ticketsComponents/footer/TicketsFooter";
import TicketsHeader from "./ticketsComponents/header/TicketsHeader";

const Ticket = ({ item, value, addValueInPopup }) => {
  const getCurrencySymbol = () => {
    if (!item.currency) {
      return "₴";
    }
    switch (item.currency) {
      case "UAH":
        return "₴";
      case "USD":
        return "$";
      case "EUR":
        return "€";
      default:
        return "₴";
    }
  };

  const getPrise = () => {
    if (!value) {
      return item.price;
    }
    switch (value) {
      case "UAH":
        return item.price;
      case "USD":
        return item.price / 40;
      case "EUR":
        return (item.price / 42).toFixed(2);
      default:
        return item.price;
    }
  };

  return (
    <>
      <div className="right-ticket">
        <TicketsHeader item={item} />
        <TicketsFooter
          item={item}
          addValueInPopup={addValueInPopup}
          getPrise={getPrise}
          getCurrencySymbol={getCurrencySymbol}
        />
      </div>
    </>
  );
};

export default Ticket;
