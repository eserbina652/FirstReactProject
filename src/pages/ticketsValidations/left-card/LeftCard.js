import React from "react";
import ValutaButton from "./components/valutaButtons/ValutaButton";
import TicketsFilter from "./components/checkbox/TicketsFilter";
import "./leftcard.css";
import SortButton from "../../../components/Button/SortButton";

const LeftCard = ({ onChangeValue }) => {
  return (
    <div className="left-card-wrapper">
      <ValutaButton onChangeValue={onChangeValue} />
      <TicketsFilter />
      <SortButton title={"Sort"} styles={"_sortButton"} />
    </div>
  );
};

export default LeftCard;
