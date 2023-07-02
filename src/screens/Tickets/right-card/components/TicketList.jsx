import React from "react";
import Ticket from "./Ticket";
import './ticketList.css'
const TicketList = ({ticketList}) => {
    return (
            <div className='ticket-list'>
                {ticketList.map((e, index) => (
                    <Ticket item={e} key={index.toString()}/>
                ))}
            </div>
    );
};

export default TicketList;
