import { combineReducers, createStore } from "redux";
import tiketsReducer from "./vanilaRedux/tikets/reducer/tiketsReducer";
// const reduers = combineReducers({ tikets: tiketsReducer });
export const store = createStore(tiketsReducer);

/*
index.js/vanillaRedux
In directory store I mast to create the file index.js and the directory vanillaRedux
with directory tickets and next directories ito it:
actions - this directory will include a file ticketsActions.js,
reducers - this directory will include a file ticketsReducer.js,
types - wil include a file ticketsTypes.js.

In index file mast be next: exports store element, which I should to create
with createStore function in arguments which, I'll put a ticketsReducer, file
from another directory
or
if I will have more than one reducer I'll should
to create const reducers with help combineReducers function in arguments which
mast be an object with key(which should mean the name of directory which will has some reducers)
and value through a colon (which will mean the name of file which I'll create some reducers)


import {createStore} from "redux";
import tiketsReducer from "./vanilaRedux/tikets/reducer/tiketsReducer";

export const store = createStore(tiketsReducer)
 */
