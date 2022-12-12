import React from "react";
import "../rightCard.css";
import {
  getPrise,
  getCurrencySymbol,
} from "../../../../utils/functionFromTicket.js";
// import { getCurrencySymbol } from "../../../../utils/functionFromTicket.js";

import TicketsFooter from "./ticketsComponents/footer/TicketsFooter";
import TicketsHeader from "./ticketsComponents/header/TicketsHeader";

const Ticket = ({ item, value, addValueInPopup }) => {
  return (
    <>
      <div className="right-ticket">
        <TicketsHeader item={item} />
        <TicketsFooter
          item={item}
          value={value}
          addValueInPopup={addValueInPopup}
        />
      </div>
    </>
  );
};

export default Ticket;
