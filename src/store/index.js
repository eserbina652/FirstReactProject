import { configureStore } from "@reduxjs/toolkit";
import ticketsSlice from "./reducers/tickets";
import popup from "../pages/popup/Popup";

export default configureStore({
  reducer: { tickets: ticketsSlice },
});

/*
configureStore - это функция которая позволяет использовать множество reducerов
*/
