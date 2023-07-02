import React from 'react';
import LeftCard from "../screens/Tickets/left-card/LeftCard";
import TicketList from "../screens/Tickets/right-card/components/TicketList";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Main = () => {
    const data = useSelector((state) => state.tickets.ticketsData);
    return (
        <>
            <div className="all-wrapper">
                <LeftCard/>
                <TicketList ticketList={data}/>
            </div>
        </>
    );
};

export default Main;
