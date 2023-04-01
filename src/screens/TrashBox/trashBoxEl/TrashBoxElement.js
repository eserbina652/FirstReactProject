import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {onDecreace, onIncreace} from "../../../store/reducers/trashBox";
import './trashBoxEl.css'
import {onOpenDelete} from "../../../store/reducers/popups";

const TrashBoxElement = ({item, index}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const increase = () => {
        dispatch(onIncreace({data: item, count: item.count}))
    }

    const decrease = () => {
        if (item.count === 1) {
            dispatch(onOpenDelete(item.id))
        } else {
            dispatch(onDecreace({data: item, count: item.count}))
        }
    }

    const handleClick = () => {
        navigate('/cryptoPage', {state: item})
    }

    return (
        <>
            <div style={index === 0 ? {marginTop: '80px'} : {marginTop: '30px'}}
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
        </>
    );
};

export default TrashBoxElement;