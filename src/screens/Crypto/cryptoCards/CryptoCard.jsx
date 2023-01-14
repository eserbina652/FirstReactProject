import React from 'react';
import './cryptoCard.css'
import {useLocation, useNavigate} from "react-router-dom";
import BuyButton from "../../../components/Button/BuyButton";
import {useDispatch, useSelector} from "react-redux";
import {onAdd} from "../../../store/reducers/trashBox";

const CryptoCard = ({item}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cryptoItem = useSelector(state => state)
    // const { state } = useLocation();

    // console.log('cryptoCardItem', cryptoItem)
    const toAdd = () => {
        dispatch(onAdd(item))
        // dispatch(onAdd({data: item, count: item.count}))
    }

    const handleClick = () => {
        navigate('/cryptoPage', {state: item})
    }
    return (
        <>
        <div className="cryptoElements-wrapper">
            <div className="cryptoElements">
            <img className="cryptoIcon" src={item.image} alt={`${item.name} picture`}/>
            <h3 className="cryptoName">{item.name}</h3>
            <p className="cryptoPrice">Current price: {item.current_price}$</p>
                <button onClick={handleClick} className="seeMoreButton">See more</button>
                <button onClick={toAdd} className="seeMoreButton">Buy</button>
            </div>
        </div>
        </>
    );
};

export default CryptoCard;
