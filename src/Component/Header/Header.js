import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth)
        .then(()=>{
            navigate('/login');
        })
    }
    return (
        <div>
            <nav className='d-flex justify-content-center py-3 header'>
                <CustomLink className="mx-2 bar" to='/'>Home</CustomLink>
                <CustomLink className="mx-2 bar" to='/about'>About</CustomLink>
                <CustomLink className="mx-2 bar" to='/blogs'>Blog</CustomLink>
                {
                    user?.uid
                        ?
                        <button className='logout-btn bg-light' onClick={handleSignOut}><FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>
                        </button>
                        :
                        <CustomLink className="mx-2 bar" to="/login">Login</CustomLink>
                }
            </nav>
        </div>
    );
};

export default Header;