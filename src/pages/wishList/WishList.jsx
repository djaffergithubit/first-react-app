import React from "react"
import NavBar from "../../components/Header/NavBar"
import Path from "../../components/Path/Path"
import Footer from "../../components/Footer/Footer"
import heartImage from "../../assets/IMG/coeurs.png"
import "./WishList.css"
import { useDispatch, useSelector } from "react-redux"
import { clearWishList, removeWishListItem, selectAllElements } from "./WishListSlice"
import { clearCounter, decrement } from "./wishCounter"

function WishList(){

    const wishList = useSelector(selectAllElements)
    const dispatch = useDispatch()

    return <div>
        <NavBar/>
        <Path path = "WishList"/>
        <div className="wishlist">
            {wishList.length === 0 ? (<div>
            <div className="heart-image">
                <img src={heartImage} alt="" />
            </div>
            <h5 className="message">No items found in wishlist.</h5>
            <button className="shopping-btn"><i class="fa-solid fa-arrow-left"></i>  Continue Shopping</button>
            </div> ):
            (<div>
                  <div className="titles">
                    <span className="column-1">Product</span>
                    <span className="column-2">Unit price</span>
                </div>
                 {wishList.map(item => (
                <div className="wishlist-items border-bottom">

                        <div className="row-container">
                            <div className="image-title">
                            <div className="image-title-content">
                                <div className="cart-img">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <h4 className="cart-product-title">{item.title}</h4>
                                </div>
                            </div>
                            <div className="right-part">
                                <div className="right-part-content">
                                    <span className="price">${item.price}</span>
                                    <button className="buy-btn buy-btn-colors">By Now</button>
                                    <button className="remove-btn" onClick={()=>{dispatch(removeWishListItem({id: item.id}))
                                    
                                    dispatch(decrement({amount: item.nbClick}))
                                }}><i class="fa-solid fa-xmark"></i></button>
                                </div>
                            </div>
                        </div>
            </div>
            
            ))}
            <div className="clear-btn-container">
            <button className="buy-btn clear-btn" onClick={()=>{dispatch(clearWishList())
            dispatch(clearCounter())
            }}>Clear Wishlist</button>
        </div>
            </div>
            
            
            )}
            
        </div>
        <Footer/>
    </div>
}

export default WishList