import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className='d-flex justify-content-center py-3 header'>
                <CustomLink className="mx-2 bar" to='/'>Home</CustomLink>
                <CustomLink className="mx-2 bar" to='/login'>Login</CustomLink>
                <CustomLink className="mx-2 bar" to='/signup'>Sign Up</CustomLink>
            </nav>
        </div>
    );
};

export default Header;