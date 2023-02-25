import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import TrashBoxElement from '../screens/TrashBox/trashBoxEl/TrashBoxElement'
import {onDecreace, onIncreace} from "../store/reducers/trashBox";
import '../screens/TrashBox/trashBoxEl/trashBoxEl.css'
const TrashBoxList = () => {
    const item = useSelector(state => state.trashBox.item)

    return (
        <>
            <div className='trashBoxEl-warp'>
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
