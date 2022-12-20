import { createSlice } from "@reduxjs/toolkit";
import res from "../../../pages/ticketsValidations/right-card/response";
import { logDOM } from "@testing-library/react";

const initialState = {
  ticketsData: res,
  filters: [],
  currency: "UAH",
};

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState: initialState,
  reducers: {
    onSelect: (state, action) => {
      state.ticketsData.sort((a, b) => a.stops - b.stops);
      return state;
    },
    onSetFilter: (state, action) => {
      if (action.payload || action.payload === 0) {
        console.log("action.payload", action.payload);
        if (state.filters?.includes(action.payload)) {
          state.filters = state.filters.filter((el) => el !== action.payload);
          console.log("state.filters", state.filters);
        } else {
          state.filters = [...state.filters, action.payload];
          console.log("state.filtersELSE", state.filters);
        }
      }
      console.log("state", state);
      return state;
    },
    onSelectFilter: (state, action) => {
      state.ticketsData = initialState.ticketsData.filter((el) =>
        state.filters.includes(el.stops)
      );
      return state;
    },
    onResetFilter: (state, action) => {
      console.log("ALL state", state);
      console.log("ALL action.payload", action.payload);
      console.log("ALL initialState", initialState);
      return initialState;
    },
    onSetCurrency: (state, action) => {
      state.currency = action.payload;
      return state;
    },
  },
});

export const {
  onSelect,
  onSetFilter,
  onSelectFilter,
  onResetFilter,
  onSetCurrency,
} = ticketsSlice.actions;
export default ticketsSlice.reducer;
