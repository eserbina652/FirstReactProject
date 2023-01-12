import React from "react";
import "../rightCard.css";
import TicketsFooter from "./ticketsComponents/footer/TicketsFooter";
import TicketsHeader from "./ticketsComponents/header/TicketsHeader";

const Ticket = ({ item }) => {
    console.log('TicketList ITEM', item)
  return (
    <>
      <div className="right-ticket">
        <TicketsHeader item={item} />
        <TicketsFooter item={item} />
      </div>
    </>
  );
};

export default Ticket;
