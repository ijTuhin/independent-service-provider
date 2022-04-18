import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [notRegistered, setNotRegistered] = useState(false);
    const [validated, setValidated] = useState(false);



    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';



    const handleUserNameBlur = event => {
        setName(event.target.value);
    }
    const handleUserEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handleUserPasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleUserNotRegisterdStateChange = event => {
        setNotRegistered(event.target.checked);
    }
    const handleFormSubmit = event => {
        event.preventDefault();


        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            return;
        }
        setValidated(true);


        setError('');


        if (notRegistered) {
            console.log('new user', name, email, password);
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    verifyEmail();
                    alert('Registration Successful');
                    navigate(from, { replace: true });
                })
                .catch(error => {
                    console.error(error);
                    // set error message
                    setError(error.message);
                })
        }
        else {
            console.log('Already user', name, email, password);
            signInWithEmailAndPassword(auth, email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    alert('Login Successful');
                    navigate(from, { replace: true });
                })
                .catch(error => {
                    console.error(error);
                    // set error message
                    setError(error.message);
                })
        }
    }



    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('Email verification send!');

            })
    }




    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Email sent to reset password');
            })
            .catch(error => {
                setError(error);
            })
    }



    const googleProvider = new GoogleAuthProvider();
    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(result);
                setUser(user);
                alert('||Sign In with Google||');
                navigate(from, { replace: true });
            })
            .catch(error => {
                alert(error);
                setError(error);
            });
    }



    return (
        <div className='d-flex justify-content-center my-5'>
            <div className="form-container">
                <h3>Please <span>{notRegistered ? 'Sign-up' : 'Login'}</span></h3>
                <form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    {
                        notRegistered ?
                            <>
                                <div className='input-field'>
                                    <input onBlur={handleUserNameBlur} type="text" name="name" placeholder='Enter name' />
                                </div>
                            </>
                            :
                            <></>
                    }
                    <div className='input-field'>
                        <input onBlur={handleUserEmailBlur} type="email" name="email" placeholder='Enter email' />
                    </div>
                    {
                        notRegistered ?
                            <>
                                <div>
                                    <input onBlur={handleUserPasswordBlur} type="password" name="password" placeholder="Enter password" />
                                    <input type="password" name="confirm-password" placeholder="Confirm password" />
                                </div>
                                <div>
                                    <input type="tel" name="phone-number" placeholder='Phone Number' />
                                    <input type="text" name="address" placeholder='Enter address' />
                                </div>
                            </>
                            :
                            <>
                                <div className='input-field'>
                                    <input onBlur={handleUserPasswordBlur} type="password" name="password" placeholder="Enter password" />
                                </div>
                            </>
                    }
                    <div className='submit-field'>

                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <input onChange={handleUserNotRegisterdStateChange} type="checkbox" name="" /> <span id='form-q'>Don't have an account?</span>
                            </div>
                            {notRegistered
                                ?
                                <></>
                                :
                                <><button onClick={handleResetPassword} className='forgot-btn'>Forgot password?</button></>
                            }
                        </div>
                        <span className='text-danger d-block'>{error}</span>
                        <div className='d-flex justify-content-between align-items-center'>
                            <button className='border-0 px-5 py-1 rounded submit-btn' type="submit">{notRegistered ? 'Sign Up' : 'Login'}</button>
                            <small>Or, </small>
                            <button onClick={handleSignInWithGoogle} type="submit" className='border-0 px-4 py-1 rounded google-btn'>Sign in With Google <FontAwesomeIcon className='ms-1' icon={faSignIn}></FontAwesomeIcon> </button>
                        </div>
                    </div>
                    <hr />


                </form>
            </div>
        </div>
    );
};

export default Login;