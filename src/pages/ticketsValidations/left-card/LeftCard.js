import React from "react";
import ValutaButton from "./components/valutaButtons/ValutaButton";
import TicketsFilter from "./components/checkbox/TicketsFilter";
import "./leftcard.css";
// import "../../../components/Button/sortButton.css"
import SortButton from "../../../components/Button/SortButton";
import { useDispatch } from "react-redux";
import { actionOnSort } from "../../../store/vanillaRedux/tickets/actions/ticketsActions";
import {onSelect} from "../../../store/reducers/tickets";

const LeftCard = () => {
  const dispatch = useDispatch();
  const onSort = () => {
    dispatch(onSelect());
  };
  return (
    <div className="left-card-wrapper">
      <ValutaButton />
      <TicketsFilter />
      <SortButton onClick={onSort} title={"Sort"} styles="_sortButton" />
    </div>
  );
};

export default LeftCard;
