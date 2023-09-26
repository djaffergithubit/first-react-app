import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showCart: false
}

const ShowSlice = createSlice({
    initialState,
    name: "showCart",
    reducers: {
        toggleShow: (state)=>{
            state.showCart = !state.showCart
        }
    }
})

export const selectShow = state => state.showCart
export const {toggleShow} = ShowSlice.actions
export default ShowSlice.reducer