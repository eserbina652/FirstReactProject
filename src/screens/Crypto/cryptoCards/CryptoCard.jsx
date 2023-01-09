import React from 'react';
import './cryptoCard.css'

const CryptoCard = ({item}) => {
    return (
        <>
        <div className="cryptoElements-wrapper">
            <div className="cryptoElements">
            <img className="cryptoIcon" src={item.image} alt={`${item.name} picture`}/>
            <h3 className="cryptoName">{item.name}</h3>
            <p className="cryptoPrice">Current price: {item.current_price} {item.symbol}</p>
                <button className="seeMoreButton">See more</button>
            </div>
        </div>
        </>
    );
};

export default CryptoCard;