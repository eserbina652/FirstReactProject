import React from "react";
import { companyName } from "../../../../../../assets";
import "./footer.css";
import BuyButton from "../../../../../../components/Button/BuyButton";
import {
  getCurrencySymbol,
  getPrise,
} from "../../../../../../utils/functionFromTicket.js";
import { useDispatch } from "react-redux";

const TicketsFooter = ({ addValueInPopup, item, value }) => {
  const dispatch = useDispatch();

  const changeSymbol = (item) => {
    // dispatch(onChangeSymbol(item));
  };
  const resetSymbol = () => {
    // dispatch(onResetSymbol());
  };
  return (
    <div>
      <div className="tickets-footer">
        <img
          className="footers-picture"
          src={companyName}
          alt="Эта дичь не отображается"
        />
        <BuyButton
          onClick={() => {
            addValueInPopup(item);
          }}
          // getPrise={getPrise(value, item)}
          // getCurrencySymbol={changeSymbol(item)}
          addValueInPopup={addValueInPopup}
          item={item}
          value={value}
        />
      </div>
    </div>
  );
};

export default TicketsFooter;
