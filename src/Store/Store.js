import {configureStore} from "@reduxjs/toolkit"
import navReducer from "../components/Header/CreateSliceNav"
import wishListReducer from "../pages/wishList/WishListSlice"
import counterReducer from "../pages/wishList/counterSlice"
import showCartReducer from "../components/Header/ShowSlice"
import cartsReducer from "../components/cartSlide/CartSlice"
import subTotalReducer from "../components/cartSlide/subTotalSlice"
import wishCounterReducer from "../pages/wishList/wishCounter"
import productDetailsReducer from "../components/Featured_Products/DetailsSlice"

export const Store = configureStore({
    reducer : {
        nav : navReducer,
        wishList: wishListReducer,
        counter: counterReducer,
        showCart: showCartReducer,
        carts: cartsReducer,
        subTotal: subTotalReducer,
        wishCounter: wishCounterReducer,
        productDetails: productDetailsReducer
    }
})
