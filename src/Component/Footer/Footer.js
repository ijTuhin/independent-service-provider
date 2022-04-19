import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer'>
            <div class="box-container pt-5">
                <div class="box d-flex justify-content-center align-items-center">
                    <div class="d-flex justify-content-center align-items-center">
                        <Link to="/"> <i class="ms-2 text-warning fas fa-angle-right"></i> Home</Link>
                        <Link to="/about"> <i class="ms-2 text-warning fas fa-angle-right"></i> About</Link>
                        <Link to="/blogs"> <i class="ms-2 text-warning fas fa-angle-right"></i> Blogs</Link>
                        <Link to="/"> <i class="ms-2 text-warning fas fa-angle-right"></i> Services</Link>
                    </div>
                </div>
                <div class="text-white text-center pt-4">
                    <p> Catering <span>Service</span> || 2022 © all rights
                        reserved! </p>
                </div>
                <div class="box">
                    <div class="d-flex justify-content-center align-items-center">
                        <a href="/"> <i class="text-warning fab fa-facebook-f"></i></a>
                        <a href="/"> <i class="text-warning fab fa-twitter"></i></a>
                        <a href="/"> <i class="text-warning fab fa-instagram"></i></a>
                        <a href="/"> <i class="text-warning fab fa-linkedin"></i></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;