import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    isOpenSuccess: false,
    isOpenDelete: false,
    item: null,
    deletedId: null
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
        onClose: (state) => {
            state.isOpen = initialState.isOpen;
            state.item = initialState.item;
            return state;
        },
        onOpenSuccess: (state) => {
            state.isOpenSuccess = true;
            return state;
        },
        onCloseSuccess: (state) => {
            state.isOpenSuccess = initialState.isOpenDelete;
            return state;
        },
        onOpenDelete: (state, action) => {
            state.isOpenDelete = true;
            state.deletedId = action.payload
            return state;
        },
        onCloseDelete: (state) => {
            state.isOpenDelete = initialState.isOpenDelete;
            return state;
        },
    },
});

export const {onOpen, onClose, onOpenSuccess, onCloseSuccess, onCloseDelete, onOpenDelete} =
    popupSlice.actions;

export default popupSlice.reducer;
