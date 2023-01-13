import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import TrashBoxElement from './trashBoxEl/TrashBoxElement'
import {onDecreace, onIncreace} from "../../store/reducers/trashBox";
import './trashBoxEl/trashBoxEl.css'
const TrashBoxList = () => {
    const item = useSelector(state => state.trashBox.item)

    return (
        <>
            <div>
                {item.map((e, index) => {
                    return (
                        <TrashBoxElement index={index} item={e} key={index.toString()}/>
                    )
                })}
            </div>
        </>
    );
};

export default TrashBoxList;
