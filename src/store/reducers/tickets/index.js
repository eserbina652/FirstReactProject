import { createSlice } from "@reduxjs/toolkit";
import res from "../../../pages/ticketsValidations/right-card/response";

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
        if (state.filters?.includes(action.payload)) {
          state.filters = state.filters.filter((el) => el !== action.payload);
        } else {
          state.filters = [...state.filters, action.payload];
        }
      }
      return state;
    },
    onSelectFilter: (state, action) => {
      state.ticketsData = initialState.ticketsData.filter((el) =>
        state.filters.includes(el.stops)
      );
      return state;
    },
    onResetFilter: (state, action) => {
      return initialState;
    },
    onSetCurrency: (state, action) => {
      state.currency = action.payload;
      return state;
    },
  },
});

export const popupSlice = createSlice({
  name: "popups",
  initialState: initialState,
  reducers: {
    onSetData: (state, action) => {},
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
