import React, { useEffect } from "react";
import logo from "../../assets/IMG/dark-logo.png";
import { useNavigate } from "react-router-dom";
import "./NavBar.css"
import { useDispatch, useSelector } from "react-redux";
import { selectBool, setBool} from "./CreateSliceNav";
import { toggleShow } from "./ShowSlice";
import { selectCarts } from "../cartSlide/CartSlice";
import { counter } from "../../pages/wishList/wishCounter";

function NavBar(){ 
    // const inputElement = document.querySelector(".inputs-field")

    // document.body.addEventListener("click", (event)=>{
    //     if(event.target !== inputElement){
    //         inputElement.style.borderBottom = "1px solid #B9B4C7"
    //     }else{
    //         inputElement.style.borderBottom = "1px solid #dcb14a"

    //     }   
    // })

    const currentPath = window.location.pathname;
    const dispatch = useDispatch()

    useEffect(()=>{
        if (currentPath === "/"){
            dispatch(setBool(false))
        }else{
            dispatch(setBool(true))
        }
    }, [currentPath, dispatch])

    let navBool = useSelector(selectBool)
    let Boolean = navBool.Bool

    const carts = useSelector(selectCarts)

    window.addEventListener("scroll", ()=>{

        const scrollHeight = window.scrollY
        const header = document.querySelector(".header-container")
        if(scrollHeight > 100){
            header.classList.add("sticky")
            header.style.backgroundColor = "white"
            document.querySelector("input").style.backgroundColor = "white"
        }else{
            header.classList.remove("sticky")
            header.style.backgroundColor = Boolean ? "white" : "#f0f0f0"
            document.querySelector("input").style.backgroundColor = Boolean ? "white" : "#f0f0f0"

        }
    }
    )

    const Navigate = useNavigate()
    let cartBadge = 0

    const wishCounter = useSelector(counter)

return  <div className= {Boolean ? "header-container background-white" : "header-container background-grey"}>
    <div className="nav">
        <div className="leftBar">
            <div className="inputs-field">
               <input  
               type="search" 
               placeholder="Search Anything..." 
               className= {Boolean ? "input-input background-white" : "input-input background-grey"}
               />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <div className="middleBar">
            <div className="logo">
                <img src={logo} alt="" onClick={()=>Navigate("/")}/>
            </div>
        </div>
            <ul className="rightBar">
                    <li className="rightBar-item profile" onClick={()=>Navigate("/login-register")}>
                        <i class="fa-regular fa-user"></i>
                    </li>
                <li className="rightBar-item wishList badge-div" onClick={()=>Navigate("/wishlist")}>
                    <div>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <span className="badge">{wishCounter}</span>
                </li>
                <li className="rightBar-item cart badge-div" onClick={()=>{dispatch(toggleShow())}}>
                    <div>
                        <i class="fa-solid fa-bag-shopping"></i>    
                    </div>
                    <span className="badge">{carts.length ? carts.map(cart => (
                         cartBadge = parseInt(cartBadge) + parseInt(cart.Qty)
                    )): 0
                     }</span>
                </li>
                <li className="rightBar-item list">
                    <i class="fa-solid fa-bars"></i>
                </li>
            </ul>
        </div>
</div>
}

export default NavBar