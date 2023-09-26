import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("wishList")) || [];

const WishListSlice = createSlice({
    initialState,
    name: "wishList",
    reducers: {
        addToWishList: (state, action) => {
            const { id, title, price, image, nbClick } = action.payload;
            const check = [...state]
            const listCheck = check.find(item => item.id === id)

            if (!listCheck) {
                const newWishList = [...state, { id, title, price, image, nbClick }];
                localStorage.setItem("wishlist", JSON.stringify(newWishList))
                return newWishList
            }else{
                localStorage.setItem("wishlist", JSON.stringify(check))
                return check
            }
          },
          
        clearWishList: (state) => {
            localStorage.removeItem("wishList"); 
            return []; 
          },

        removeWishListItem:(state, action)=>{
            const {id} = action.payload
            const checkList = [...state]
            const exist = checkList.find(item => item.id === id)

            if (exist) {
                const newList = checkList.filter(item => item.id !== id)
                localStorage.setItem("wishlist", JSON.stringify(newList))
                return newList
                

            }
        } ,

        incrementNbClick: (state, action)=>{
            const {id} = action.payload
            const checkList = [...state]
            const elementExist = checkList.find(item => item.id === id)

            if (elementExist) {
                elementExist.nbClick += 1
                
                localStorage.setItem("wishlist", JSON.stringify(state))
                return state
            }
            
        }
          
    }
})

export const selectAllElements = state => state.wishList

export const {addToWishList, clearWishList, removeWishListItem, incrementNbClick} = WishListSlice.actions

export default WishListSlice.reducer