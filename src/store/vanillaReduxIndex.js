import { combineReducers, createStore } from "redux";
import ticketsReducer from "./tickets/reducers/ticketsReducer";

// export const reducers = combineReducers({tickets: ticketsReducer})
export const store = createStore(ticketsReducer);
