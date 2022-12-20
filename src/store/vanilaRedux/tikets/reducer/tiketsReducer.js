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
