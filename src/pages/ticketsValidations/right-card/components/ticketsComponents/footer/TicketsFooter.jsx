import React from "react";
import { companyName } from "../../../../../../assets";
import "./footer.css";
import BuyButton from "../../../../../../components/Button/BuyButton";
import {
  getCurrencySymbol,
  getPrise,
} from "../../../../../../utils/functionFromTicket.js";
// import { getPrise } from "../../../../../../utils/functionFromTicket.js";

const TicketsFooter = ({ addValueInPopup, item, value, onChangeValue }) => {
  return (
    <div>
      <div className="tickets-footer">
        <img
          className="footers-picture"
          src={companyName}
          alt="Эта дичь не отображается"
        />
        <BuyButton
          onChangeValue={onChangeValue}
          getPrise={getPrise(value, item)}
          getCurrencySymbol={getCurrencySymbol(item)}
          addValueInPopup={addValueInPopup}
          item={item}
        />
        {/*<button*/}
        {/*  onClick={() => addValueInPopup(item)}*/}
        {/*  className="button-for-buy-a-ticket"*/}
        {/*>*/}
        {/*  Buy for {getPrise()} {getCurrencySymbol()}*/}
        {/*</button>*/}
      </div>
    </div>
  );
};

export default TicketsFooter;
