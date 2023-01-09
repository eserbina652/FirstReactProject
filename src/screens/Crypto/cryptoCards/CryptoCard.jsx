import React from 'react';
import './cryptoCards/cryptoCard.css'

const CryptoCard = ({item}) => {
    return (
        <div className="cryptoElements-wrapper">
            <h3 className="cryptoName">{item.name}</h3>
        </div>
    );
};

export default CryptoCard;