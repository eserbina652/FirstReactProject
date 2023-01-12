import React from "react";
import { greenCircle } from "../../assets";
import CloseButton from "../../components/Button/CloseButton";
import { useDispatch } from "react-redux";
import "./successPopup.css";
import { actionOnCloseSuccess } from "../../store/vanillaRedux/popups/actions/popupsActions";
import {onCloseSuccess} from "../../store/reducers/popups";

const PopupSuccess = () => {
  const dispatch = useDispatch();
  const closePopupSuccess = () => {
    dispatch(onCloseSuccess());
  };
  return (
    <div>
      <div className="popup-wrapper">
        <div className="popup-little-window">
          <CloseButton onClick={() => closePopupSuccess()} />
          <div className="middleSuccess">
            <img className="successPicture" src={greenCircle} alt="success" />
          </div>
          <p className="underPictureText">Success!</p>
        </div>
      </div>
    </div>
  );
};

export default PopupSuccess;
