import React from 'react';
import "../Header/NavBar.css"
import "./Footer.css"
import logo from "../../assets/IMG/dark-logo.png";

const Footer = () => {
    return (
        <footer style={{ fontFamily: 'Roboto, sans-serif' }}>
            <section className='footer-top'>
            <div className="footer-part-1 footer-top-element">
                <h3 className="list-footer-name">Address</h3>
                <ul id='list-footer'>
                    <li className="list-footer-element Address-info"><i class="fa-solid fa-location-dot"></i><h5>Helendo, Chicago, USA 2023</h5></li>
                    <li className="list-footer-element Address-info"><i class="fa-solid fa-phone"></i><h5>+846677028028</h5></li>
                    <li className="list-footer-element social">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-tumblr"></i>
                    </li>
                </ul>
            </div>
            <div className="footer-part-2 footer-top-element">
                <h3 className="list-footer-name">Help & Information</h3>
                <ul id='list-footer'>
                    <li className="list-footer-element item">Help & Contact Us</li>
                    <li className="list-footer-element item">Returns & Refunds</li>
                    <li className="list-footer-element item">Online Stores</li>
                    <li className="list-footer-element item">Terms & Conditions</li>
                </ul>
            </div>
            <div className="footer-part-3 footer-top-element">
                <h3 className="list-footer-name">About Us</h3>
                <ul id='list-footer'>
                    <li className="list-footer-element item">About Us</li>
                    <li className="list-footer-element item">What We Do</li>
                    <li className="list-footer-element item">FAQ Page</li>
                    <li className="list-footer-element item">Contact Us</li>
                </ul>
            </div>
            <div className="footer-part-4 footer-top-element">
                <h3 className="list-footer-name">Newsletter</h3>
                <div className="inputs-field">
                    <input  
                    type="email" 
                    placeholder="Your email address" 
                    className="email-input"
                    />
                        <i class="fa-solid fa-arrow-right"></i>
                </div>
                <ul id='footer-list-list'>
                    <li className="list-footer-element item margin-el">Term & Condition</li>
                    <li className="list-footer-element item margin-el">Policy</li>
                    <li className="list-footer-element item">Map</li>
                </ul>
            </div>
            </section>
            <div className="footer-bottom">
                <ul className='padding'>
                    <li className="list-footer-element margin-el">Term & Condition</li>
                    <li className="list-footer-element margin-el">Policy</li>
                    <li className="list-footer-element">Map</li>
                </ul>

                <div className='logo-container'>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="follow-us">
                    <h3 className="follow-desc">Follow Us On Social</h3>
                    <ul id='list-footer'>
                        <li className="list-footer-element social padding">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-tumblr"></i>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-copyright">
                <p className="copy-right">© 2021 Helendo. All Rights Reserved.</p>
            </div>
          
        </footer>
    );
}

export default Footer;