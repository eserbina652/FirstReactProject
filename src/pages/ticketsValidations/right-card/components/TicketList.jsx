import React from "react";
import Ticket from "./Ticket";
import { useSelector } from "react-redux";

const TicketList = () => {
  const data = useSelector((state) => state.tickets.ticketsData);

  return (
    <>
      <div>
        {data.map((e, index) => (
          <Ticket item={e} key={index.toString()} />
        ))}
      </div>
    </>
  );
};

export default TicketList;
