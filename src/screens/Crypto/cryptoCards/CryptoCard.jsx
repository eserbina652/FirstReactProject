import React from 'react';
import './cryptoCard.css'
import {useNavigate} from "react-router-dom";

const CryptoCard = ({item}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/crypto', {state: item})
    }
    return (
        <>
        <div className="cryptoElements-wrapper">
            <div className="cryptoElements">
            <img className="cryptoIcon" src={item.image} alt={`${item.name} picture`}/>
            <h3 className="cryptoName">{item.name}</h3>
            <p className="cryptoPrice">Current price: {item.current_price} {item.symbol}</p>
                <button onClick={handleClick} className="seeMoreButton">See more</button>
            </div>
        </div>
        </>
    );
};

export default CryptoCard;