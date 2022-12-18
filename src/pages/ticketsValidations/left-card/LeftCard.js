import React from "react";
import ValutaButton from "./components/valutaButtons/ValutaButton";
import TicketsFilter from "./components/checkbox/TicketsFilter";
import "./leftcard.css";
import SortButton from "../../../components/Button/SortButton";
import { useDispatch, useSelector } from "react-redux";
import { onSelect } from "../../../store/reducers/tickets";

const LeftCard = () => {
  const ticketsData = useSelector((state) => state.tickets.ticketsData);
  const dispatch = useDispatch();
  const onSort = (data) => {
    dispatch(onSelect(data));
  };
  return (
    <div className="left-card-wrapper">
      <ValutaButton />
      <TicketsFilter />
      <SortButton
        onClick={() => onSort(ticketsData)}
        title={"Sort"}
        styles={"_sortButton"}
      />
    </div>
  );
};

export default LeftCard;
