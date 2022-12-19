import React from "react";
import { companyName } from "../../../../../../assets";
import "./footer.css";
import BuyButton from "../../../../../../components/Button/BuyButton";
import {
  getCurrencySymbol,
  getPrise,
} from "../../../../../../utils/functionFromTicket.js";
import { useDispatch, useSelector } from "react-redux";
import { onOpen } from "../../../../../../store/reducers/popups";

const TicketsFooter = ({ item, value }) => {
  return (
    <div>
      <div className="tickets-footer">
        <img
          className="footers-picture"
          src={companyName}
          alt="Эта дичь не отображается"
        />
        <BuyButton
          //ERROR
          getPrise={getPrise(item, value)}
          getCurrencySymbol={getCurrencySymbol(item)}
          item={item}
          value={value}
        />
      </div>
    </div>
  );
};

export default TicketsFooter;
