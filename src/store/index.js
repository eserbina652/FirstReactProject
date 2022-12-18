import { configureStore } from "@reduxjs/toolkit";
import ticketsSlice from "./reducers/tickets";
import popups from "./reducers/popups";

export default configureStore({
  reducer: { tickets: ticketsSlice, popups: popups },
});

/*
configureStore - это функция которая позволяет использовать множество reducerов
*/
