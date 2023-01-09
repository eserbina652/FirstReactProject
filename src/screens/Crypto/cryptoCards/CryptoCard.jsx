import React from 'react';
import './cryptoCard.css'

const CryptoCard = ({item}) => {
    return (
        <div className="cryptoElements-wrapper">
            <img className="cryptoIcon" src={item.image} alt={`${item.name} picture`}/>
            <h3 className="cryptoName">{item.name}</h3>
            <p>Current price: {item.current_price} {item.symbol}</p>
        </div>
    );
};

export default CryptoCard;