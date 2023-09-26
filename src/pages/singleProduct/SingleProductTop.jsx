import React from "react"
import { addToWishList, incrementNbClick } from "../wishList/WishListSlice";
import { addCart } from "../../components/cartSlide/CartSlice";
import { setSubTotal } from "../../components/cartSlide/subTotalSlice";
import { increment } from "../wishList/wishCounter";
import { useDispatch, useSelector } from "react-redux";
import { counterDecrement, counterIncrement, selectCounter } from "../wishList/counterSlice";
import image from "../../assets/IMG/nancy.jpg"
import { setShowProduct } from "../../components/Featured_Products/DetailsSlice";

function SingleProductTop(props){


    const counter = useSelector(selectCounter)
    const dispatch = useDispatch()

    return <div className={props.product ? "single-product-top single-product-top-active": "single-product-top"}>
        <div className="product-img">
            <img src={image} alt="" />
        </div>
        <div className={props.product ? "product-infos product-infos-active" : "product-infos"}>
            <h3 className="product-name">{props.title}</h3>
            <span className="product-price">${props.price}</span>
            <p className="par">At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.</p>
            <div className="features-container">
                <div className="counter">
                    <button className="minus" onClick={()=>dispatch(counterDecrement())}>-</button>
                    <span className="count">{counter.counter}</span>
                    <button className="plus" onClick={()=>dispatch(counterIncrement())}>+</button>
                </div>
                <button className="add-cart" 
                    onClick={()=>{dispatch(addCart({
                        id: props.id,
                        image: props.img, 
                        title: props.title, 
                        Qty: counter.counter, 
                        price: props.price
                       }))
                       let value = props.price * counter.counter
                       dispatch(setSubTotal(value))
                    }
                        }>
                    Add To Cart
                </button>
                <button className="like-btn" onClick={()=>{dispatch(addToWishList({id: props.id,
title: props.title,
price: props.price,
image: props.img,
nbClick: 0
}))
dispatch(increment())
dispatch(incrementNbClick({id: props.id}))
}}><i class="fa-regular fa-heart"></i></button>
            </div>
            <div className="items">
                <div>
                    <span className="name">SKU</span>: <span className="res">508</span>
                </div>
                <div>
                    <span className="name">Categories</span>: <span className="res">furniture</span>
                </div>
                <div>
                    <span className="name">Tags</span>: <span className="res">table</span>
                </div>
            </div>
            <div className="social-share">
                <span className="text-black">Share this items :</span>
            </div>
        </div>
        {props.product && <button className="remove-btn position" onClick={()=>dispatch(setShowProduct({id:props.id}))}><i class="fa-solid fa-xmark"></i></button>}
    </div>            
}

export default SingleProductTop