import React from "react";
import { BestSellingList } from "./BestSellingList";
import "./BestSelling.css"

function BestSelling() {
    return <div id="best-selling">
        <div className="best-selling-title">
            <h2 >Best Selling</h2>
            <hr className="big-title-underline line" />
        </div>
        <section className="best-products">
            {BestSellingList.map(pro => (
                <div className="best-pro">
                <img src={pro.img} alt="" />
                <h3 className="pro-title">{pro.title}</h3>
                <span className="pro-price">${pro.price}</span>
            </div>
            )) }
        </section>
    </div>;
}

export default BestSelling;