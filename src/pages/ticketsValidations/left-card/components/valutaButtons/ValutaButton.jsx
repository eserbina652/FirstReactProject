import React from "react";
import "./valutaButtons.css";
import SortButton from "../../../../../components/Button/SortButton";

const ValutaButton = ({ onChangeValue }) => {
  return (
    <div>
      <div>
        <h3 className="left-card-header">Currency</h3>
        <div className="buttons-wrapper">
          <SortButton
            onClick={() => {
              onChangeValue("EUR");
            }}
            title={"EUR"}
          />
          <SortButton onClick={() => onChangeValue("UAH")} title={"UAH"} />
          <SortButton onClick={() => onChangeValue("USD")} title={"USD"} />
        </div>
      </div>
    </div>
  );
};

export default ValutaButton;
