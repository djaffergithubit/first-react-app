import React from "react";

function SingleBottom(props){
    return <div className="single-product-bottom-container">
    <div className="single-product-bottom">
        <div className="features-container-1">
            <h2 className="text">Features</h2>
            <ul className="features">
                <div className="list-container">
                    <i class="fa-solid fa-caret-right"></i>
                    <li className="features-item">Fully padded back panel, web hauded handle</li>
                </div>
                <div className="list-container">
                    <i class="fa-solid fa-caret-right"></i>
                    <li className="features-item">Internal padded sleeve fits 15″ laptop</li>
                </div>
                <div className="list-container">
                    <i class="fa-solid fa-caret-right"></i>
                    <li className="features-item">Internal tricot lined tablet sleeve</li>
                </div>
                <div className="list-container">
                    <i class="fa-solid fa-caret-right"></i>
                    <li className="features-item">One large main compartment and zippered</li>
                </div>
                <div className="list-container">
                    <i class="fa-solid fa-caret-right"></i>
                    <li className="features-item">Premium cotton canvas fabric</li>
                </div>
            </ul>
        </div>
        <div className="image-container image">
            <img className="photo" src={props.img} alt="" />
        </div>
    </div>
</div>
}

export default SingleBottom;