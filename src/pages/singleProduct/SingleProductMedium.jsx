import React from "react";

function SingleProductMedium(props){
    return <div className="single-product-medium-container">
    <div className="single-product-medium">
        <ul className="nav-single-pro">
            <li className="nav-single-pro-item">Description</li>{" / "}
            <li className="nav-single-pro-item">Additional information</li>{" / "}
            <li className="nav-single-pro-item">Reviews</li>
        </ul>
        <section className="descriptionText">
            <div className="unknown">
                <h2 className="text">Description</h2>
                <p className="describe">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum omnis voluptas assumenda.</p>
            </div>
            <div className="image-container">
                <img src={props.img} alt="" />
            </div>
        </section>
    </div>
</div>
}

export default SingleProductMedium;