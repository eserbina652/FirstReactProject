import React from "react";
import { companyName } from "../../../../../../assets";
import "./footer.css";
import BuyButton from "../../../../../../components/Button/BuyButton";

const TicketsFooter = ({ item }) => {
  return (
    <div>
      <div className="tickets-footer">
        <img
          className="footers-picture"
          src={companyName}
          alt="Company's name"
        />
        <BuyButton item={item} />
      </div>
    </div>
  );
};

export default TicketsFooter;
