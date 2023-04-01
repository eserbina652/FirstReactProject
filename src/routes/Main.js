import React from 'react';
import LeftCard from "../pages/ticketsValidations/left-card/LeftCard";
import TicketList from "../pages/ticketsValidations/right-card/components/TicketList";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Main = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/crypto', {state: {foo: 2}})
    }
    const data = useSelector((state) => state.tickets.ticketsData);
    return (
        <>
            <div className="all-wrapper">
                <LeftCard/>
                <div onClick={handleClick}>Click</div>
                <TicketList ticketList={data}/>
            </div>
        </>
    );
};

export default Main;
