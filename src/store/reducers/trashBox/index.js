import {createSlice} from "@reduxjs/toolkit";
import {popupSlice} from "../popups";
import Api from "../../../api/Api";


const initialState = {
    item: [],
}

export const trashBoxSlice = createSlice({
    name: 'trashBox',
    initialState: initialState,
    reducers: {
        onAdd:(state, action) => {
            // console.log('state', state.item)
            // console.log('action', action.payload)
            state.item = [...state.item, {...action.payload, count: 1}]
            return state
        },
        onIncreace:(state, action) => {
            let temp2 = {...action.payload.data, count: action.payload.count + 1}
            const index = state.item.findIndex(el => el.id === action.payload.data.id)
            state.item[index] = temp2
            return state
        },
        onDecreace:(state, action) => {
            let temp2 = {...action.payload.data, count: action.payload.count - 1}
            const index = state.item.findIndex(el => el.id === action.payload.data.id)
            state.item[index] = temp2
            return state
        }
    }
})

export const { onAdd, onIncreace, onDecreace } =
    trashBoxSlice.actions;

export default trashBoxSlice.reducer;
/*
информация о билетах содержится в data/cryptoList.js
 */