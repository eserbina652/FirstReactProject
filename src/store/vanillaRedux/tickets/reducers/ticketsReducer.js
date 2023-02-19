import {
  ON_RESET_FILTER,
  ON_SELECT_TICKETS,
  ON_SET_CURRENCY,
  ON_SET_FILTER,
  ON_SORT,
} from "../types/ticketsTypes";
import res from "../../../../pages/ticketsValidations/right-card/response";

const initialState = {
  ticketsData: res,
  filters: [],
  currency: "UAH",
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ON_SORT:
      const temp = [...state.ticketsData];
      return {
        ...state,
        ticketsData: temp.sort((a, b) => a.stops - b.stops),
      };
    case ON_SET_CURRENCY:
      return { ...state, currency: action.currency };
    case ON_SET_FILTER:
      if (action.filter || action.filter === 0) {
        if (state.filters.includes(action.filter)) {
          return {
            ...state,
            filters: state.filters.filter((el) => el !== action.filter),
          };
        } else {
          return {
            ...state,
            filters: [...state.filters, action.filter],
          };
        }
      }
      return state;
    case ON_RESET_FILTER:
      return {
        ...state,
        ticketsData: [...initialState.ticketsData],
      };
    case ON_SELECT_TICKETS:
      return {
        ...state,
        ticketsData: initialState.ticketsData.filter((el) =>
          state.filters.includes(el.stops)
        ),
      };
    default:
      return state;
  }
};
