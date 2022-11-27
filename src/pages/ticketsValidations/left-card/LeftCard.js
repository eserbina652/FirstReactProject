import React from 'react';
import ValutaButtons from "./components/valutaButtons/ValutaButtons";
import TicketsFilter from "./components/checkbox/TicketsFilter";
import './leftcard.css'

const LeftCard = () => {
    return (
        <div className="left-card-wrapper">
            <ValutaButtons/>
            <TicketsFilter/>
        </div>
    );
};

export default LeftCard;