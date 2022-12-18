import React from "react";

import { greenCircle } from "../../assets";
import CloseButton from "../../components/Button/CloseButton";
import { useDispatch } from "react-redux";
import { onClose, onCloseSuccess } from "../../store/reducers/popups";

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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                width: "20vw",
                margin: "3vw 0 0 0",
              }}
              src={greenCircle}
              alt=""
            />
          </div>

          <p
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              fontSize: "3rem",
            }}
          >
            Success!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopupSuccess;
