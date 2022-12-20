import React from "react";
import "./sortButton.css";
// import { onSelect, onSetCurrency } from "../../store/reducers/tickets";
import { useDispatch, useSelector } from "react-redux";
import { actionOnSort } from "../../store/vanilaRedux/tikets/actions/tiketsActions";

const SortButton = ({ title, onClick, styles }) => {
  // const ticketsData = useSelector((state) => state.ticketsData);

  return (
    <div>
      <button onClick={onClick} className={`valuta-button ${styles}`}>
        {title}
      </button>
    </div>
  );
};

export default SortButton;
