import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
    const [user]= useAuthState(auth);
    return (
        <div>
            <nav className='d-flex justify-content-center py-3 header'>
                <CustomLink className="mx-2 bar" to='/'>Home</CustomLink>
                <CustomLink className="mx-2 bar" to='/login'>Login</CustomLink>
                <CustomLink className="mx-2 bar" to='/signup'>Sign Up</CustomLink>
                <CustomLink className="mx-2 bar" to='/about'>About</CustomLink>
                <CustomLink className="mx-2 bar" to='/blogs'>Blog</CustomLink>
                {
                    user?.uid
                    ?
                    <button onClick={()=>signOut(auth)}>Sign Out</button>
                    :
                    <CustomLink to="/login">Login</CustomLink>
                }
            </nav>
        </div>
    );
};

export default Header;