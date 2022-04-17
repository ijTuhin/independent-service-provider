import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase.init';
import './SignUp.css';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [registered, setRegistered] = useState(false);
    const [validated, setValidated] = useState(false);



    const handleUserNameBlur = event => {
        setName(event.target.value);
    }
    const handleUserEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handleUserPasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleUserRegisterdStateChange = event => {
        setRegistered(event.target.checked);
    }
    const handleFormSubmit = event => {
        event.preventDefault();


        if (!registered) {
            console.log('new user', name, email, password);
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    alert('Registration Successful');
                })
                .catch(error => {
                    console.error(error);
                    // set error message
                    setError(error.message);
                })
        }
        else {
            console.log('Already user', name, email, password);
        }
    }



    return (
        <div className='d-flex justify-content-center my-5'>
            <div className="form-container">
                <h3>Please <span>{registered ? 'Login' : 'Sign-up'}</span></h3>
                <form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <div className='input-field'>
                        <input onBlur={handleUserNameBlur} type="text" name="name" placeholder='Enter name' />
                    </div>
                    <div className='input-field'>
                        <input onBlur={handleUserEmailBlur} type="email" name="email" placeholder='Enter email' />
                    </div>
                    <div>
                        <input onBlur={handleUserPasswordBlur} type="password" name="password" placeholder="Enter password" />
                        <input type="password" name="confirm-password" placeholder="Confirm password" />
                    </div>
                    <div>
                        <input type="tel" name="phone-number" placeholder='Phone Number' />
                        <input type="text" name="address" placeholder='Enter address' />
                    </div>
                    <div className='submit-field'>
                        <input onChange={handleUserRegisterdStateChange} type="checkbox" name="" /> <span id='form-q'>Already a user?</span><br />
                        <button className='border-0 px-2 py-1 rounded' type="submit">{registered ? 'Login' : 'Sign Up'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;