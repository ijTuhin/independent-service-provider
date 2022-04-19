import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='blog-container'>
            <h1> <span style={{ color: "goldenrod" }}>Question</span> <span style={{ color: "rgba(64, 26, 56, 0.7)" }}>Answer</span></h1>
            <h5><FontAwesomeIcon icon={faBarsStaggered}></FontAwesomeIcon> Difference between authorization and authentication</h5>
            <p>Authentication is verifying someone's identity, whereas Authorization is the process of verifying someone's access to any specific applications, files, data or system.</p>
            <hr />
            <h5><FontAwesomeIcon icon={faBarsStaggered}></FontAwesomeIcon> Why are you using firebase? What other options do you have to implement authentication?</h5>
            <p>I am Using firebase for authentication(email-password authentication, sign-in with google, github, facebook etc.) and hosting purpose</p>
            <hr />
            <h5><FontAwesomeIcon icon={faBarsStaggered}></FontAwesomeIcon> What other services does firebase provide other than authentication?</h5>
            <p>Apart from providing Authentication, Firebase provides cloud messaging service, hosting service, Remote config(It helps in remotely changing our application UI and content, without publishing it again.)</p>
        </div>
    );
};

export default Blogs;