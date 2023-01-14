import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {onDecreace, onIncreace} from "../../../store/reducers/trashBox";
import './trashBoxEl.css'
const TrashBoxElement = ({item, index}) => {
    const navigate = useNavigate()
    const state = useSelector(state => state.trashBox.item)
    const dispatch = useDispatch()

    const increase = () => {
        dispatch(onIncreace({data: item, count: item.count}))
    }

    const decrease = () => {
        dispatch(onDecreace({data: item, count: item.count}))
    }
    // console.log('amount', amount)

    const handleClick = () => {
        navigate('/cryptoPage', {state: item})
    }
    console.log('TrashBoxEl', item)
    // console.log('state', state)
    return (
        <div>
            <div style={index===0 ? { marginTop: '200px' } : { marginTop: '30px' }}
                 className="cryptoElement-wrapper">
                <div className="cryptoElements">
                    <img className="cryptoIcon" src={item.image} alt={`${item.name} picture`}/>
                    <h3 className="cryptoName">{item.name}</h3>
                    <p className="cryptoPrice">Current price: {item.current_price}$</p>
                    <button onClick={handleClick} className="seeMoreButton">See more</button>
                    <button onClick={increase} className="seeMoreButton">+</button>
                    <button onClick={decrease} className="seeMoreButton">-</button>
                    <p className="cryptoPrice">Amount {item.count} </p>
                </div>
            </div>
        </div>
    );
};

export default TrashBoxElement;