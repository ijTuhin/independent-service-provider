import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer'>
            <div class="box-container">
                <div class="box">
                    <h3>Quick links</h3>
                    <Link to="/"> <i class="text-warning fas fa-angle-right"></i> Home</Link>
                    <Link to="/about"> <i class="text-warning fas fa-angle-right"></i> About</Link>
                    <Link to="/blogs"> <i class="text-warning fas fa-angle-right"></i> Blogs</Link>
                    <Link to="/"> <i class="text-warning fas fa-angle-right"></i> Services</Link>
                </div>

                <div class="box">
                    <h3>Contact info</h3>
                    <a href="/"> <i class="text-warning fas fa-phone"></i> +880-111-222-3333 </a>
                    <a href="/"> <i class="text-warning fas fa-envelope"></i> abcd1234@gmail.com </a>
                    <a href="/"> <i class="text-warning fas fa-map"></i> Chattagram, Bangladesh </a>
                </div>

                <div class="box">
                    <h3>Follow us</h3>
                    <a href="/"> <i class="text-warning fab fa-facebook-f"></i> Facebook </a>
                    <a href="/"> <i class="text-warning fab fa-twitter"></i> Twitter </a>
                    <a href="/"> <i class="text-warning fab fa-instagram"></i> Instagram </a>
                    <a href="/"> <i class="text-warning fab fa-linkedin"></i> Linkedin </a>
                </div>

            </div>

            <div class="text-white text-center pb-4">
                <p> Catering <span>Service</span> || 2022 © all rights
                reserved! </p>
            </div>
        </div>
    );
};

export default Footer;