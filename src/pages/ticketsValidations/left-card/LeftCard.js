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
/*
LeftCard.js

import React from "react";
import ValutaButton from "./components/valutaButtons/ValutaButton";
import TicketsFilter from "./components/checkbox/TicketsFilter";
import "./leftcard.css";
import SortButton from "../../../components/Button/SortButton";
import { actionOnSort } from "../../../store/vanilaRedux/tikets/actions/tiketsActions";
import { useDispatch } from "react-redux";

const LeftCard = () => {
  const dispatch = useDispatch();
  const onSort = () => {
    console.log("zdes");
    dispatch(actionOnSort());
  };
  return (
    <div className="left-card-wrapper">
      <ValutaButton />
      <TicketsFilter />
      <SortButton title={"Sort"} styles={"_sortButton"} onClick={onSort} />
    </div>
  );
};

export default LeftCard;
 */
