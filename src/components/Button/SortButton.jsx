import React from "react";
import "./sortButton.css";

const SortButton = ({ title, onClick, styles }) => {
  return (
    <div>
      {/*что тут со стилями?*/}
      <button onClick={onClick} className={`valuta-button ${styles}`}>
        {title}
      </button>
    </div>
  );
};

export default SortButton;
