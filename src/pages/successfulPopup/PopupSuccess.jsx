import React from "react";
import {greenCircle} from "../../assets";
import CloseButton from "../../components/Button/CloseButton";
import {useDispatch} from "react-redux";
import "./successPopup.css";
import {onCloseSuccess} from "../../store/reducers/popups";

const PopupSuccess = () => {
    const dispatch = useDispatch();
    const closePopupSuccess = () => {
        dispatch(onCloseSuccess());
    };
    return (
        <div>
            <div className="success-popup-wrapper">
                <div className="success-popup-little-window">
                    <div className='success-close-button'>
                        <CloseButton onClick={() => closePopupSuccess()}/>
                    </div>
                    <img className="successPicture" src={greenCircle} alt="success"/>
                    <div className="underPictureText">
                        <p>Success!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupSuccess;
