import React, { useEffect, useState } from "react"
import NavBar from "../../components/Header/NavBar"
import "./Home.css"
import image1 from "../../assets/IMG/top_left.jpg"
import image2 from "../../assets/IMG/wooden-cup.jpg"
import image3 from "../../assets/IMG/chair.jpg"
import FeaturedProducts from "../../components/Featured_Products/FeaturedProducts"
import Footer from "../../components/Footer/Footer"

function Home(){

    const [showForm, setShowForm] = useState({
        page1Show: true,
        page2Show: false,
        page3Show: false
    })

    function handleClick1(){
        setShowForm(prevShowForm => {
            return {
                ...prevShowForm,
                page1Show: true,
                page2Show: false,
                page3Show: false
            }
        })

        document.querySelector(".page-1").style.backgroundColor = "#dcb14a"
        document.querySelector(".page-2").style.backgroundColor = "#B9B4C7"
        document.querySelector(".page-3").style.backgroundColor = "#B9B4C7"
    }

    function handleClick2(){
        setShowForm(prevShowForm => {
            return {
                ...prevShowForm,
                page1Show: false,
                page2Show: true,
                page3Show: false
            }
        })

        document.querySelector(".page-2").style.backgroundColor = "#dcb14a"
        document.querySelector(".page-1").style.backgroundColor = "#B9B4C7"
        document.querySelector(".page-3").style.backgroundColor = "#B9B4C7"
    }

    function handleClick3(){
        setShowForm(prevShowForm => {
            return {
                ...prevShowForm,
                page1Show: false,
                page2Show: false,
                page3Show: true
            }
        })

        document.querySelector(".page-3").style.backgroundColor = "#dcb14a"
        document.querySelector(".page-1").style.backgroundColor = "#B9B4C7"
        document.querySelector(".page-2").style.backgroundColor = "#B9B4C7"
    }

    const [isVisible, setIsVisible] = useState(false)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsVisible(true)
        }, 1000)

        return () => clearTimeout(timer)

    }, [])





    return <div className="Home">
        <NavBar/>
        <div className="section-top">
            <div className="top">{isVisible && <div className="top-left">
               <div className="little-title">
                  <span className="text">CHAIR</span>
                  <br />
                  <span className="text">COLLECTION</span>
                  <br />
                  <span className="text">2023</span>
               </div>
               <div className="big-title-div">
                   <h2 className="big-title">Welcome To Helendo Store</h2>
                   <hr className="big-title-underline" />
               </div>
               <div className="description">
                   <p className="desc">Many desktop publishing packages and web page editors now use</p>
                    <p className="desc second-par">Lorem Ipsum as their default model text </p>
               </div>
               <button className="shop-btn">Shop Now <i class="fa-solid fa-arrow-right"></i></button>
            </div>}
            <div className="top-right">

                {showForm.page1Show && <img src={image1} alt="" />}
                {showForm.page2Show && <img src={image2} alt="" />}
                {showForm.page3Show && <img src={image3} alt="" />}
            </div> 
            </div>
            <div className="pagination">
                <div className="page-change page-1" onClick={handleClick1}></div>
                <div className="page-change page-2" onClick={handleClick2}></div>
                <div className="page-change page-3" onClick={handleClick3}></div>
            </div>
        </div>
        <FeaturedProducts/>
        <Footer/>
    </div>
}

export default Home