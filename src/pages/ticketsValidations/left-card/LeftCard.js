import React from "react";
import ValutaButton from "./components/valutaButtons/ValutaButton";
import TicketsFilter from "./components/checkbox/TicketsFilter";
import "./leftcard.css";
import SortButton from "../../../components/Button/SortButton";

const LeftCard = ({ onSort, onSetFilter, onChangeValue, onClickAll }) => {
  return (
    <div className="left-card-wrapper">
      <ValutaButton onChangeValue={onChangeValue} />
      <TicketsFilter
        onClickAll={onClickAll}
        onSort={onSort}
        onSetFilter={onSetFilter}
      />
      <SortButton onClick={onSort} title={"Sort"} styles={"_sortButton"} />
    </div>
  );
};

export default LeftCard;
/*
LeftCard.js
Удаляем из пропсов LeftCardа все кроме onChangeValue, так как
перечисленных методов больше нет
const LeftCard = ({onChangeValue}) => {
  return (
    <div className="left-card-wrapper">
      <ValutaButton onChangeValue={onChangeValue} />
      Из TicketsFilter удаляем все
      <TicketsFilter />
      из SortButton удаляем onClick
      <SortButton title={"Sort"} styles={"_sortButton"} />
    </div>
  );
};

export default LeftCard;

 */
