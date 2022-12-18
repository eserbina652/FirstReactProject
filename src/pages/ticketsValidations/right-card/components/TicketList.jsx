import React from "react";
import Ticket from "./Ticket";

const TicketList = ({ ticketList, value, addValueInPopup }) => {
  console.log("ticketList", ticketList);
  return (
    <>
      <div>
        {ticketList.map((e, index) => (
          <Ticket
            addValueInPopup={addValueInPopup}
            value={value}
            item={e}
            key={index.toString()}
          />
        ))}
      </div>
    </>
  );
};

export default TicketList;
