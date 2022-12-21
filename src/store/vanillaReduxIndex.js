import { combineReducers, createStore } from "redux";
import tiketsReducer from "./vanillaRedux/tickets/reducers/ticketsReducer";
// const reducers = combineReducers({ tickets: ticketsReducer });
export const store = createStore(tiketsReducer);
