import React from "react";
import ValutaButton from "./components/valutaButtons/ValutaButton";
import TicketsFilter from "./components/checkbox/TicketsFilter";
import "./leftcard.css";
import SortButton from "../../../components/Button/SortButton";
import { actionOnSort } from "../../../store/vanilaRedux/tikets/actions/tiketsActions";
import { useDispatch } from "react-redux";

const LeftCard = () => {
  const dispatch = useDispatch();
  const onSort = () => {
    console.log("zdes");
    dispatch(actionOnSort());
  };
  return (
    <div className="left-card-wrapper">
      <ValutaButton />
      <TicketsFilter />
      <SortButton title={"Sort"} styles={"_sortButton"} onClick={onSort} />
    </div>
  );
};

export default LeftCard;

/*
vanillaReduxIndex.js
import { combineReducers, createStore } from "redux";
import tiketsReducer from "./vanilaRedux/tikets/reducer/tiketsReducer";
// const reduers = combineReducers({ tikets: tiketsReducer });
export const store = createStore(tiketsReducer);
 */

/*
ticketsTypes.js
export const ON_SELECT = "ON_SELECT";
// export const ON_SETFILTER = "ON_SETFILTER";
// export const ON_SELECRFILTER = "ON_SELECRFILTER";
// export const ON_RESETFILTER = "ON_RESETFILTER";
export const ON_SET_CURRENCY = "ON_SET_CURRENCY";
export const ON_SORT = "ON_SORT";
 */

/*
ticketsReducer.js

import { ON_SELECT, ON_SET_CURRENCY, ON_SORT } from "../types/tiketsTypes";
import res from "../../../../pages/ticketsValidations/right-card/response";

const initialState = {
  ticketsData: res,
  filters: [],
  currency: "UAH",
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ON_SORT:
      console.log("action", action);
      const temp = [...state.ticketsData];
      return {
        ...state,
        ticketsData: temp.sort((a, b) => a.stops - b.stops),
      };
    case ON_SET_CURRENCY:
      console.log("currency", action);
      return { ...state, currency: action.currency };
    default:
      return state;
  }
};
 */

/*
ticketsActions.js

import { ON_SET_CURRENCY, ON_SORT } from "../types/tiketsTypes";

export const actionOnSort = () => ({
  type: ON_SORT,
});

export const actionOnSetCurrency = (currency) => ({
  type: ON_SET_CURRENCY,
  currency,
});
 */

/*
LeftCard.js

import React from "react";
import ValutaButton from "./components/valutaButtons/ValutaButton";
import TicketsFilter from "./components/checkbox/TicketsFilter";
import "./leftcard.css";
import SortButton from "../../../components/Button/SortButton";
import { actionOnSort } from "../../../store/vanilaRedux/tikets/actions/tiketsActions";
import { useDispatch } from "react-redux";

const LeftCard = () => {
  const dispatch = useDispatch();
  const onSort = () => {
    console.log("zdes");
    dispatch(actionOnSort());
  };
  return (
    <div className="left-card-wrapper">
      <ValutaButton />
      <TicketsFilter />
      <SortButton title={"Sort"} styles={"_sortButton"} onClick={onSort} />
    </div>
  );
};

export default LeftCard;
 */

/*
ValutaButton.jsx

import React from "react";
import "./valutaButtons.css";
import SortButton from "../../../../../components/Button/SortButton";
import { useDispatch } from "react-redux";
import { actionOnSetCurrency } from "../../../../../store/vanilaRedux/tikets/actions/tiketsActions";

const ValutaButton = () => {
  const dispatch = useDispatch();
  const setCurrency = (str) => {
    dispatch(actionOnSetCurrency(str));
    console.log("str", str);
  };
  return (
    <div>
      <div>
        <h3 className="left-card-header">Currency</h3>
        <div className="buttons-wrapper">
          <SortButton
            onClick={() => {
              setCurrency("EUR");
            }}
            title={"EUR"}
          />
          <SortButton onClick={() => setCurrency("UAH")} title={"UAH"} />
          <SortButton onClick={() => setCurrency("USD")} title={"USD"} />
        </div>
      </div>
    </div>
  );
};

export default ValutaButton;
 */

/*
SortButton.jsx

import React from "react";
import "./sortButton.css";

const SortButton = ({ title, onClick, styles }) => {
  return (
    <div>
      <button onClick={onClick} className={`valuta-button ${styles}`}>
        {title}
      </button>
    </div>
  );
};

export default SortButton;

 */
