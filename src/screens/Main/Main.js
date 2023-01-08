import React from 'react';
import LeftCard from "../../pages/ticketsValidations/left-card/LeftCard";
import TicketList from "../../pages/ticketsValidations/right-card/components/TicketList";
import {useSelector} from "react-redux";

const Main = () => {

    const data = useSelector((state) => state.tickets.ticketsData);
    return (
        <>
            <div className="all-wrapper">
                <LeftCard />
                <TicketList ticketList={data} />
            </div>
        </>
    );
};

export default Main;