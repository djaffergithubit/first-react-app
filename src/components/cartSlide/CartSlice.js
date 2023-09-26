import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("carts")) || []

const CartSlice = createSlice({
    initialState,
    name: "carts",
    reducers: {
        addCart: (state, action)=>{
                const {id, image, title, Qty, price} = action.payload
                const newState = [...state, {id, image, title, Qty, price}]
                const list = newState.filter(item => item.id === action.payload.id)

                if (list.length > 1) {
                    localStorage.setItem("carts", JSON.stringify(state))  
                    const element = newState.find(item => item.id === action.payload.id)  
                    element.Qty = parseInt(element.Qty) + parseInt(action.payload.Qty)
                    return state
                }else{
                    localStorage.setItem("carts", JSON.stringify(newState))
                    return newState                
                }

                   
                
            },

            clearCarts: (state) => {
                localStorage.removeItem("carts"); 
                return []; 
              },

            removeCart: (state, action)=>{
                const {id} = action.payload
                const list = [...state]
                const element = list.find(item => item.id === id)

                if (element.Qty > 1) {
                    element.Qty = parseInt(element.Qty) - 1
                    localStorage.setItem("carts", JSON.stringify(state))
                    return state
                }else{
                    const newList = list.filter(item => item.id !== id)
                    localStorage.setItem("carts", JSON.stringify(newList))
                    return newList
                }
            }
        }
    }
)

export const selectCarts = state => state.carts
export const {addCart, clearCarts, removeCart} = CartSlice.actions
export default CartSlice.reducer