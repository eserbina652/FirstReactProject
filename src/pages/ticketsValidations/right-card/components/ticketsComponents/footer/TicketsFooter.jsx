import React from "react";
import { companyName } from "../../../../../../assets";
import "./footer.css";
import BuyButton from "../../../../../../components/Button/BuyButton";
import {
  getCurrencySymbol,
  getPrise,
} from "../../../../../../utils/functionFromTicket.js";

const TicketsFooter = ({ addValueInPopup, item, value }) => {
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
          getPrise={getPrise(value, item)}
          getCurrencySymbol={getCurrencySymbol(item)}
          addValueInPopup={addValueInPopup}
          item={item}
          value={value}
        />
      </div>
    </div>
  );
};

export default TicketsFooter;
