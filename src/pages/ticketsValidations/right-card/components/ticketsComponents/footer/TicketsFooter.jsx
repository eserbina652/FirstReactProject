import React from "react";
import { companyName } from "../../../../../../assets";
import "./footer.css";
import BuyButton from "../../../../../../components/Button/BuyButton";

const TicketsFooter = ({
  getPrise,
  getCurrencySymbol,
  addValueInPopup,
  item,
}) => {
  return (
    <div>
      <div className="tickets-footer">
        <img
          className="footers-picture"
          src={companyName}
          alt="Эта дичь не отображается"
        />
        {/*<BuyButton*/}
        {/*    getPrise={getPrise}*/}
        {/*    getCurrencySymbol={getCurrencySymbol}*/}
        {/*    addValueInPopup={addValueInPopup}*/}
        {/*    item={item}*/}
        {/*/>*/}
        <button
          onClick={() => addValueInPopup(item)}
          className="button-for-buy-a-ticket"
        >
          Buy for {getPrise()} {getCurrencySymbol()}
        </button>
      </div>
    </div>
  );
};

export default TicketsFooter;
