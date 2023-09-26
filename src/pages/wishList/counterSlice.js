import { createSlice } from "@reduxjs/toolkit";

const initialState ={
     counter : "1"   
}

const counterSlice = createSlice({
    initialState,
    name: "counter",
    reducers: {
        counterIncrement : (state)=>{
            state.counter++
        },

        counterDecrement : (state)=>{
            if (state.counter > "1") {
                state.counter--
            }else{
                state.counter = 1
            }
        },

    }
})

export const selectCounter = state => state.counter
export const {counterIncrement, counterDecrement} = counterSlice.actions
export default counterSlice.reducer