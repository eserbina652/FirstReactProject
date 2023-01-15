import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {onDecreace, onDeleteEl, onIncreace} from "../../../store/reducers/trashBox";
import './trashBoxEl.css'
import PopupSuccess from "../../../pages/successfulPopup/PopupSuccess";
import {onCloseDelete, onCloseSuccess, onOpenDelete, onOpenSuccess} from "../../../store/reducers/popups";
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


    // const decrease = () => {
    //     if (item.count === 1) {
    //         dispatch(onOpenSuccess())
    //         dispatch(onDeleteEl(item))
    //         setTimeout(() => {
    //             dispatch(onCloseSuccess());
    //         }, 3000);
    //     } else {
    //         dispatch(onDecreace({data: item, count: item.count}))
    //     }
    //
    // }


    // console.log('amount', amount)

    const handleClick = () => {
        navigate('/cryptoPage', {state: item})
    }
    // console.log('TrashBoxEl', item)
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