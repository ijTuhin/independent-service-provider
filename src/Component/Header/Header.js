import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav className='navbars'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/login'>Login</CustomLink>
            </nav>
        </div>
    );
};

export default Header;