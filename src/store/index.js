import { configureStore } from "@reduxjs/toolkit";
import ticketsSlice from "./reducers/tickets";

export default configureStore({
  reducer: { tickets: ticketsSlice },
});

/*
configureStore - это функция которая позволяет использовать множество reducerов
*/
