import React, { useEffect } from "react";
import "./checkbox.css";
import { useDispatch, useSelector } from "react-redux";
import {
  onResetFilter,
  onSetFilter,
} from "../../../../../store/reducers/tickets";
import {
  actionOnResetFilter,
  actionOnSelectTickets,
  actionOnSetFilter,
} from "../../../../../store/vanillaRedux/tickets/actions/ticketsActions";

const TicketsFilter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  console.log("filters", filters);
  const onSelectFilter = (filter) => {
    dispatch(actionOnSetFilter(filter));
  };
  const onReset = () => {
    dispatch(actionOnResetFilter());
  };
  useEffect(() => {
    if (filters.length) {
      dispatch(actionOnSelectTickets());
    } else {
      dispatch(actionOnResetFilter());
    }
  }, [filters]);
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
