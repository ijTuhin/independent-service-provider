import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from './../../images/not-found1.jpg';
import './../Home/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='not-found'>
            <img src={notFound} alt="" />
            <button onClick={() => navigate('/')} className='goBack-btn'>Go Back to Home <span><FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon></span></button>
        </div>
    );
};

export default NotFound;