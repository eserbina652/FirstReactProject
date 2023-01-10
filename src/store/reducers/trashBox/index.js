import {createSlice} from "@reduxjs/toolkit";
import {popupSlice} from "../popups";
import Api from "../../../api/Api";


const initialState = {
    itemData: Api,
    item: []
}

export const trashBoxSlice = createSlice({
    name: 'trashBox',
    initialState: initialState,
    reducers: {
        onAdd:(state, action) => {
            console.log('state', state.item)
            console.log('action', action.payload)
            state.item = [...state.item, action.payload]
            return state
        },
    }
})

export const { onAdd } =
    trashBoxSlice.actions;

export default trashBoxSlice.reducer;
/*
информация о билетах содержится в data/cryptoList.js
 */