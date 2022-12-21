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

/*
ticketsReducers.js
There is initialState object with keys and values which I need in reducers
At this moment it's - ticketsData: res, filters: [] and currency: 'UAH'

After I mast to create reducers with default exporting before created
Reducers in VanillaRedux has another syntax, it's looks like functions,
but actually it doesn't, right away after exported I should to write next:
(state = initialState, action) => {
and the action's body will has to contain a switch(action.type)
case ON_SORT: there is will be a const temp = new array with previous state.ticketsData
with rest operator before it.
And exactly here I should to return not even a state with rest operator and yet a ticketsData
with sort method.
If I do it all right this action should be a sorted values at the stops

Actually, all actions are mast to return the object(or array, but rarely)
with ...previous state, DON'T FORGET ABOUT ...REST OPERATOR, and not always key,
which I'll want to changes with action's help, and : value which I'm changing right here
})
*/
