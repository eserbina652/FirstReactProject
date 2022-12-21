import React from "react";
import Ticket from "./Ticket";
import { useSelector } from "react-redux";

const TicketList = ({ ticketList, value }) => {
  console.log("ticketList", ticketList);
  return (
    <>
      <div>
        {ticketList.map((e, index) => (
          <Ticket item={e} value={value} key={index.toString()} />
        ))}
      </div>
    </>
  );
};

export default TicketList;
/*
const TicketList = ({ ticketList, value, addValueInPopup }) => {
  return (
    <>
      <div>
        {ticketList.map((e, index) => (
          <Ticket
            addValueInPopup={addValueInPopup}
            // value={value}
            item={e}
            key={index.toString()}
          />
        ))}
      </div>
    </>
  );
};

export default TicketList;
 */
