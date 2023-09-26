import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("subTotal")) || 0;

const subTotalSlice = createSlice({
    initialState,
    name: "subTotal",
    reducers: {
        setSubTotal:{
            reducer: (state, action)=>{
                state.subTotal += action.payload
                localStorage.setItem("subTotal", JSON.stringify(state))
            },
            prepare: (subTotal)=>{
                return{
                    payload: subTotal
                }
            }
        },

        clear: (state)=>{
            state.subTotal = 0
            localStorage.setItem("subTotal", JSON.stringify(state))
        },
        decrementTotal:(state, action)=>{
            const {price} = action.payload
            state.subTotal-= price
            localStorage.setItem("subTotal", JSON.stringify(state))
        }
    }
})

export const subTotalValue = state => state.subTotal
export const {setSubTotal, clear, decrementTotal} = subTotalSlice.actions
export default subTotalSlice.reducer