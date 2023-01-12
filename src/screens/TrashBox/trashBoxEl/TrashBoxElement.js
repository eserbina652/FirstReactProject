import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {onDecreace, onIncreace} from "../../../store/reducers/trashBox";
import './trashBoxEl.css'
const TrashBoxElement = ({item}) => {
    const navigate = useNavigate()
    const amount = useSelector(state => state.trashBox.item.count?.count)
    const dispatch = useDispatch()

    const increase = () => {
        dispatch(onIncreace(item))
    }

    const decrease = () => {
        dispatch(onDecreace())
    }
    // console.log('amount', amount)

    const handleClick = () => {
        navigate('/cryptoPage', {state: item})
    }

    return (
        <div>
            <div className="cryptoElement-wrapper">
                <div className="cryptoElements">
                    <img className="cryptoIcon" src={item.image} alt={`${item.name} picture`}/>
                    <h3 className="cryptoName">{item.name}</h3>
                    <p className="cryptoPrice">Current price: {item.current_price}$</p>
                    <button onClick={handleClick} className="seeMoreButton">See more</button>
                    <button onClick={increase} className="seeMoreButton">+</button>
                    <button onClick={decrease} className="seeMoreButton">-</button>
                    <p className="cryptoPrice">Amount {item.count}</p>
                </div>
            </div>
        </div>
    );
};

export default TrashBoxElement;