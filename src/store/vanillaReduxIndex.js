import { combineReducers, createStore } from "redux";
import tiketsReducer from "./vanillaRedux/tickets/reducers/ticketsReducer";
import popupsReducers from "./vanillaRedux/popups/reducers/popupsReducers";
export const reducers = combineReducers({
  tickets: tiketsReducer,
  popups: popupsReducers,
});
export const store = createStore(reducers);
