import React from "react";
import "./sortButton.css";
import { useDispatch } from "react-redux";
import { onSelect } from "../../store/reducers/tickets";

const SortButton = ({ title, onClick, styles }) => {
  const dispatch = useDispatch();
  const handleSort = () => {
    dispatch(onSelect());
  };
  return (
    <div>
      <button onClick={handleSort} className={`valuta-button ${styles}`}>
        {title}
      </button>
    </div>
  );
};

export default SortButton;
