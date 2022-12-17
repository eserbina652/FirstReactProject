import React from "react";
import { companyName } from "../../../../../../assets";
import "./footer.css";
import BuyButton from "../../../../../../components/Button/BuyButton";
import {
  getCurrencySymbol,
  getPrise,
} from "../../../../../../utils/functionFromTicket.js";
import { onSetCurrency } from "../../../../../../store/reducers/tickets";
import { useSelector } from "react-redux";

const TicketsFooter = ({ addValueInPopup, item, value }) => {
  const currency = useSelector((state) => state.tickets.currency);

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
            addValueInPopup(currency);
          }}
          getPrise={getPrise(value, currency)}
          getCurrencySymbol={getCurrencySymbol(currency)}
          addValueInPopup={addValueInPopup}
          item={item}
          value={value}
        />
      </div>
    </div>
  );
};

export default TicketsFooter;
