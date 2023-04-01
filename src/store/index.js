import {configureStore} from "@reduxjs/toolkit";
import ticketsSlice from "./reducers/tickets";
import popupSlice from "./reducers/popups";
import trashBoxSlice from "./reducers/trashBox";

export default configureStore({
    reducer: {tickets: ticketsSlice, trashBox: trashBoxSlice, popups: popupSlice,}
});
