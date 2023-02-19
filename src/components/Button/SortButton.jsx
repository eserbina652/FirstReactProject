import React from "react";
import "./sortButton.css";

const SortButton = ({ onClick, title, styles }) => {
  return (
    <div>
      <button onClick={onClick} className={`valuta-button ${styles}`}>
        {title}
      </button>
    </div>
  );
};

export default SortButton;
