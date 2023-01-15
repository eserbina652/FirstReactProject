import React from 'react';
import CloseButton from "../../../components/Button/CloseButton";
import {greenCircle} from "../../../assets";
import {useDispatch, useSelector} from "react-redux";
import {onCloseDelete, onCloseSuccess, onOpenSuccess} from "../../../store/reducers/popups";
import {onDeleteEl} from "../../../store/reducers/trashBox";
import './deletePopup.css'

const DeleteCryptoCoinPopup = () => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.trashBox.item)
    const deletedId = useSelector(state => state.popups.deletedId)
    const closePopupDelete = () => {
        dispatch(onCloseDelete());
    };

    const yesButtonDelete = () => {
        dispatch(onCloseDelete())
        console.log('delete Item is', item)
        dispatch(onDeleteEl(deletedId))
        dispatch(onOpenSuccess())
        setTimeout(() => {
            dispatch(onCloseSuccess());
        }, 3000);
    }

    const noButtonDelete = () => {
        dispatch(onCloseDelete())
    }
    return (
        <>
            <div className="delete-popup-wrapper">
                <div className="delete-popup-little-window">
                    <CloseButton onClick={() => closePopupDelete()} />
                    <div className="middleButtons">
                        <p>Are you really want to delete this coin</p>
                        <button className="deleteButtons" onClick={yesButtonDelete}>Yes</button>
                        <button className="deleteButtons" onClick={noButtonDelete}>No</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteCryptoCoinPopup;