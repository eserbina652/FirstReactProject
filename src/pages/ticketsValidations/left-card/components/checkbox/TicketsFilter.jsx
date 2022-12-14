import React from "react";
import "./checkbox.css";
import { useDispatch } from "react-redux";
import {
  onResetFilter,
  onSetFilter,
} from "../../../../../store/reducers/tickets";

const TicketsFilter = () => {
  const dispatch = useDispatch();
  const onSelectFilter = (filter) => {
    dispatch(onSetFilter(filter));
    console.log("filter-checkBox", filter);
  };
  const onReset = () => {
    dispatch(onResetFilter());
    console.log("checkBox", 1);
  };

  return (
    <div>
      <div>
        <h3 className="left-card-header">Number of transfers</h3>
      </div>
      <div>
        <form
          action="/react/first-project-of-react/public"
          className="tickets-form"
        >
          <label title={"All"} className="checkbox">
            <input type="checkbox" onChange={() => onReset()} />
            <div className="checkbox__text">All</div>
          </label>
          <label title={"Without transfers"} className="checkbox">
            <input type="checkbox" onChange={() => onSelectFilter(0)} />
            <div className="checkbox__text">Without transfers</div>
          </label>
          <label title={"1 transfers"} className="checkbox">
            <input type="checkbox" onChange={() => onSelectFilter(1)} />
            <div className="checkbox__text">1 transfers</div>
          </label>
          <label title={"2 transfers"} className="checkbox">
            <input type="checkbox" onChange={() => onSelectFilter(2)} />
            <div className="checkbox__text">2 transfers</div>
          </label>
          <label title={"3 transfers"} className="checkbox">
            <input type="checkbox" onChange={() => onSelectFilter(3)} />
            <div className="checkbox__text">3 transfers</div>
          </label>
        </form>
      </div>
    </div>
  );
};

export default TicketsFilter;
