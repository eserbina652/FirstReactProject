import React from "react";
import "../rightCard.css";
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
        />
      </div>
    </>
  );
};

export default Ticket;

/*
import React from "react";
import "../rightCard.css";

import TicketsFooter from "./ticketsComponents/footer/TicketsFooter";
import TicketsHeader from "./ticketsComponents/header/TicketsHeader";
Удалить onChangeValue
const Ticket = ({ item, value, addValueInPopup }) => {
  return (
    <>
      <div className="right-ticket">
        <TicketsHeader item={item} />
        Удалить onChangeValue
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
*/
