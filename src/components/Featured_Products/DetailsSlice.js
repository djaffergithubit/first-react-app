import { createSlice } from "@reduxjs/toolkit";
import { products } from "./Products";

const initialState = JSON.parse(localStorage.getItem("productDetails")) || products;

const DetailsSlice = createSlice({
    initialState,
    name: "productDetails",
    reducers: {
        setShowProduct: (state, action)=>{
            const {id} = action.payload
            const productsList = [...state]
            const showDetails = productsList.find(item => item.id === id)

            if (showDetails) {
                showDetails.show = !showDetails.show
                localStorage.setItem("productDetails", JSON.stringify(state))
                return state
            }
        }
    }
})

export const selectAllProducts = state => state.productDetails
export const {setShowProduct} = DetailsSlice.actions
export default DetailsSlice.reducer