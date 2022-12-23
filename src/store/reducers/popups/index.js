import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isOpenSuccess: false,
  item: null,
};

export const popupSlice = createSlice({
  name: "popups",
  initialState: initialState,
  reducers: {
    onOpen: (state, action) => {
      state.item = action.payload;
      state.isOpen = true;
      return state;
    },
    onClose: (state, action) => {
      state.isOpen = initialState.isOpen;
      state.item = initialState.item;
      return state;
    },
    onOpenSuccess: (state, action) => {
      state.isOpenSuccess = true;
      return state;
    },
    onCloseSuccess: (state, action) => {
      state.isOpenSuccess = initialState.isOpenSuccess;
      return state;
    },
  },
});

export const { onOpen, onClose, onOpenSuccess, onCloseSuccess } =
  popupSlice.actions;

export default popupSlice.reducer;
