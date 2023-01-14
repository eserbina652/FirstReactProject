import React from 'react';
import {useLocation} from "react-router-dom";
import './cryptoCardPage.css'
import {onAdd} from "../../../store/reducers/trashBox";
import {useDispatch, useSelector} from "react-redux";
const CryptoCardPage = () => {
    const { state } = useLocation();
    const item = useSelector(state => state.trashBox.item)
    // console.log('ITEM', item)
    const dispatch = useDispatch()
    const toAdd = () => {
        dispatch(onAdd(state))
    }

    return (
        <>
            <div className="cryptoElement-wrapper">
                    <div className="headers">
                        <p id="icon">Icon</p>
                        <h3 id="name">Name</h3>
                        <p id="price">Current price</p>
                        <p id="minPrice">24h Low</p>
                        <p id="maxPrice">24h High</p>
                        <p id="marketCup">Market cup</p>
                    </div>
                    <div className="values">
                        <img id="icon-value" src={state.image} alt={`${state.name} picture`}/>
                        <h3 id="name-value">{state.name}</h3>
                        <p id="price-value">{state.current_price}</p>
                        <p id="minPrice-value">{state.low_24h}</p>
                        <p id="maxPrice-value">{state.high_24h}</p>
                        <p id="marketCup-value">{state.market_cap}</p>
                    </div>
                <button onClick={toAdd} className="seeMoreButton">Buy</button>
            </div>
        </>
    );
};

export default CryptoCardPage;