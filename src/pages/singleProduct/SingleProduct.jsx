import React, { useEffect, useState } from "react";
import NavBar from "../../components/Header/NavBar"
import Path from "../../components/Path/Path"
import Footer from "../../components/Footer/Footer"
import "./SingleProduct.css"
import { useParams } from "react-router-dom";
import { products } from "../../components/Featured_Products/Products";
import SingleProductTop from "./SingleProductTop";
import SingleProductMedium from "./SingleProductMedium";
import SingleBottom from "./SingleBottom";

function SingleProduct() {

   
    const {productName} = useParams()
    const [displayProducts, setDisplayProducts] = useState(products)

    useEffect(()=>{
        let singleProduct
        singleProduct = displayProducts.filter(product => product.title === productName)

        if (singleProduct) {
            setDisplayProducts(singleProduct)
        }
    }, [productName, displayProducts])

    return <div className="single-product-page">
       
        {displayProducts.length && displayProducts.map(product => ( <div>
        <NavBar/>
        <Path path={product.title}/>
        <div className="single-product-top-container">
        <SingleProductTop
        img={product.img}
        title={product.title}
        price={product.price}
        id={product.id}

        /></div>

        <SingleProductMedium
        img={product.img}
        />
        
        <SingleBottom
        img={product.img}
        />
        
        </div>))}
            
        <Footer/>
    </div>
    }
    ;
    

export default SingleProduct