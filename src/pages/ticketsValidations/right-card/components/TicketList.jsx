import React from "react";
import Ticket from "./Ticket";

const TicketList = ({ticketList}) => {
    return (
        <>
            <div>
                {ticketList.map((e, index) => (
                    <Ticket item={e} key={index.toString()}/>
                ))}
            </div>
        </>
    );
};

export default TicketList;
