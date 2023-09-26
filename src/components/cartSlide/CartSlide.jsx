import React from "react"
import "./CartSlide.css"
import { useDispatch, useSelector } from "react-redux"
import { toggleShow } from "../Header/ShowSlice"
import { clearCarts, removeCart, selectCarts } from "./CartSlice"
import { clear, decrementTotal, subTotalValue } from "./subTotalSlice"

function CartSlide(){

    const dispatch = useDispatch()
    const carts = useSelector(selectCarts)
    const subTotalValueY = useSelector(subTotalValue)
    const subTotal = subTotalValueY.subTotal

    return <div className="cart-inner-container">
        <div className="cart-inner-left" onClick={()=>dispatch(toggleShow())}></div>
        <div className="cart-inner">
            <div className="close">
                <button className="remove-btn" onClick={()=>dispatch(toggleShow())}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div className={carts.length >= 3 ? "cart-inner-item-container overflow-div" : "cart-inner-item-container"}>
            { !carts.length ? (<h2 className="text">Your Cart is currently empty</h2>):
            (carts.map(cart =>(
            
                 <div className="cart-inner-item class-active">
                <div className="cart-inner-image">
                    <img src={cart.image} alt="" />
                </div>
                <div className="cart-inner-infos">
                    <div className="info-container">
                        <h3 className="leader">{cart.title}</h3>
                        <div className="cart-inner-qty">Qty : <span className="color">{cart.Qty}</span></div>
                        <div className="inner-cart-price">Price : <span className="color">${cart.price}</span></div>
                    </div>
                    <button className="btn" onClick={()=>{
                        dispatch(removeCart({id: cart.id}))
                        dispatch(decrementTotal({price: cart.price}))
                        }}>
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
           ))  )}

           </div>
           {carts.length && <div>
                <div className="mini-cart-subtotal">
                <span className="subtotal">Subtotal</span>
                <span className="subtotal">${subTotal}</span>
           </div>
           <div className="mini-cart-btns">
                <div><button className="view-cart-btn" onClick={()=> {dispatch(clearCarts())
                     dispatch(clear())}}>
                    View Cart</button></div>
                <div><button className="checkout-btn">Checkout</button></div>
           </div>
                </div>}
        </div>

    </div>
    
}

export default CartSlide