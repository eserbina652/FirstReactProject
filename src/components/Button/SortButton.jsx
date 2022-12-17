import React from "react";
import "./sortButton.css";
import { onSelect, onSetCurrency } from "../../store/reducers/tickets";
import { useDispatch, useSelector } from "react-redux";

const SortButton = ({ title, onClick, styles }) => {
  const ticketsData = useSelector((state) => state.tickets.ticketsData);
  const dispatch = useDispatch();
  const onSort = (data) => {
    dispatch(onSelect(data));
  };
  return (
    <div>
      <button
        onClick={() => onSort(ticketsData)}
        className={`valuta-button ${styles}`}
      >
        {title}
      </button>
    </div>
  );
};

export default SortButton;
