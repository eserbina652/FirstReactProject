import { configureStore } from "@reduxjs/toolkit";
import ticketsSlice from "./reducers/tikets";

export default configureStore({
  reducer: { tickets: ticketsSlice },
});
