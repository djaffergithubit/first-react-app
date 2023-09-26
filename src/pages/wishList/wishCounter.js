import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("wishCounter")) || 0;

const wishSlice = createSlice({
    initialState,
    name: "wishCounter",
    reducers: {
        increment: (state)=>{
            state += 1
            localStorage.setItem("wishCounter", JSON.stringify(state))
            return state

        },

        decrement: (state, action)=>{

            const {amount} = action.payload
            state -= amount
            localStorage.setItem("wishCounter", JSON.stringify(state))
            return state

        },

        clearCounter: (state)=>{
            state = 0
            localStorage.setItem("wishCounter", JSON.stringify(state))
            return state
        }
    }
})

export const counter = state => state.wishCounter
export const {increment, clearCounter, decrement} = wishSlice.actions
export default wishSlice.reducer