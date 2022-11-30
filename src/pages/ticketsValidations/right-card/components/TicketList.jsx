import React from "react";
import Ticket from "./Ticket";

const TicketList = ({ ticketList, value, addValueInPopup, onChangeValue }) => {
  return (
    <>
      <div>
        {ticketList.map((e, index) => (
          <Ticket
            onChangeValue={onChangeValue}
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
