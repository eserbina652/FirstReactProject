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
/*

/*
TicketList.jsx
import React from "react";
import Ticket from "./Ticket";

Удаляем onChangeValue так как ее больше нет
const TicketList = ({ ticketList, value, addValueInPopup}) => {
  return (
    <>
      <div>
        {ticketList.map((e, index) => (
        Удаляем onChangeValue по той же причине
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
 */
