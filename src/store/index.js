import { configureStore } from "@reduxjs/toolkit";
import ticketsSlice from "./reducers/tickets";
import popupSlice from "./reducers/popups";

export default configureStore({
  reducer: { tickets: ticketsSlice, popups: popupSlice },
});
