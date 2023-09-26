import React from "react";
import "./FeaturedProducts.css"
import { products } from "./Products";
import { useNavigate} from "react-router-dom";
import SingleProductTop from "../../pages/singleProduct/SingleProductTop";
import { selectAllProducts, setShowProduct } from "./DetailsSlice";
import { useDispatch, useSelector } from "react-redux";

function FeaturedProducts(){

    const style = {
        order: 2
    }

    const style1 = {
        order: 1
    }

    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const allProducts = useSelector(selectAllProducts)
    const product = allProducts.find(item => item.show)

    return <div className="featured-products">
        {products.map((item)=>(
            <div>
  <div className="single-featured-product">
            <div style = {item.id % 2 === 0 ? style  : {}} className="product-item featured-product-img" onClick={()=> Navigate(`/single-product/${item.title}`)}>
                <img src={item.img} alt=""/>
            </div>
            <div style = {item.id % 2 === 0 ? style1 : {}} className="product-item featured-product-info">
                <span className="part-name">FEATURED PRODUCT</span>
                <h2 className="featured-product-title">{item.title}</h2>
                <hr className="big-title-underline" />
                <p className="product-desc">{item.description}</p>
                <button className="single-product" onClick={()=> dispatch(setShowProduct({id: item.id})) }>only ${item.price} <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
            </div>

        )) }

{ product && <div className="full-container">
        <SingleProductTop
            img={product.img}
            title={product.title}
            price={product.price}
            id={product.id}
            product={product}
            />

            </div>}
        
    </div> 
}

export default FeaturedProducts