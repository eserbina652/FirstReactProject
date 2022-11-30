import React from "react";
import "../rightCard.css";
import {
  getPrise,
  getCurrencySymbol,
} from "../../../../utils/functionFromTicket.js";
// import { getCurrencySymbol } from "../../../../utils/functionFromTicket.js";

import TicketsFooter from "./ticketsComponents/footer/TicketsFooter";
import TicketsHeader from "./ticketsComponents/header/TicketsHeader";

const Ticket = ({ item, value, addValueInPopup, onChangeValue }) => {
  return (
    <>
      <div className="right-ticket">
        <TicketsHeader item={item} />
        <TicketsFooter
          onChangeValue={onChangeValue}
          item={item}
          value={value}
          addValueInPopup={addValueInPopup}
          getPrise={getPrise}
          getCurrencySymbol={getCurrencySymbol}
        />
      </div>
    </>
  );
};

export default Ticket;
