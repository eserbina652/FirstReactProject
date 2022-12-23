import React from "react";
import ValutaButton from "./components/valutaButtons/ValutaButton";
import TicketsFilter from "./components/checkbox/TicketsFilter";
import "./leftcard.css";
import SortButton from "../../../components/Button/SortButton";
import { useDispatch } from "react-redux";
import { actionOnSort } from "../../../store/vanillaRedux/tickets/actions/ticketsActions";

const LeftCard = () => {
  const dispatch = useDispatch();
  const onSort = () => {
    dispatch(actionOnSort());
  };
  return (
    <div className="left-card-wrapper">
      <ValutaButton />
      <TicketsFilter />
      <SortButton onClick={onSort} title={"Sort"} styles={"_sortButton"} />
    </div>
  );
};

export default LeftCard;
