import { combineReducers, createStore } from "redux";
import tiketsReducer from "./vanilaRedux/tikets/reducer/tiketsReducer";
// const reduers = combineReducers({ tikets: tiketsReducer });
export const store = createStore(tiketsReducer);
