import React from 'react';
import './cryptoCard.css'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {onAdd, onIncreace} from "../../../store/reducers/trashBox";

const CryptoCard = ({item}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const itemList = useSelector(state => state.trashBox.item)

    const toAdd = () => {
        const currentEl = itemList.find(el => el.id === item.id)
        if (currentEl) {
            console.log('currentEl', currentEl)
            dispatch(onIncreace({data: currentEl, count: currentEl.count}))
        } else {
            dispatch(onAdd(item))
        }
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
