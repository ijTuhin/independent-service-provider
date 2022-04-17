import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer'>
            <div class="box-container">
                <div class="box">
                    <h3>Quick links</h3>
                    <Link to="/"> <i class="fas fa-angle-right"></i> Home</Link>
                    <Link to="/about"> <i class="fas fa-angle-right"></i> About</Link>
                    <Link to="/blogs"> <i class="fas fa-angle-right"></i> Blogs</Link>
                    <Link to="/"> <i class="fas fa-angle-right"></i> Services</Link>
                </div>

                <div class="box">
                    <h3>Contact info</h3>
                    <a href="/"> <i class="fas fa-phone"></i> +880-111-222-3333 </a>
                    <a href="/"> <i class="fas fa-envelope"></i> abcd1234@gmail.com </a>
                    <a href="/"> <i class="fas fa-map"></i> Chattagram, Bangladesh </a>
                </div>

                <div class="box">
                    <h3>Follow us</h3>
                    <a href="/"> <i class="fab fa-facebook-f"></i> Facebook </a>
                    <a href="/"> <i class="fab fa-twitter"></i> Twitter </a>
                    <a href="/"> <i class="fab fa-instagram"></i> Instagram </a>
                    <a href="/"> <i class="fab fa-linkedin"></i> Linkedin </a>
                </div>

            </div>

            <div class="text-white text-center pb-4">
                <p> Route to <span>Go Wander</span> || 2022 © all rights
                reserved! </p>
            </div>
        </div>
    );
};

export default Footer;