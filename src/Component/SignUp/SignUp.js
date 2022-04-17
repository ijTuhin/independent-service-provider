import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [registered, setRegistered] = useState(false);
    const [validation, setvalidation] = useState(false);



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
        setRegistered(event.target.value);
    }
    const handleFormSubmit = event => {
        console.log('Submit')
        event.preventDefault();
    }



    return (
        <div className='d-flex justify-content-center my-5'>
            <div className="form-container">
                <h3>Please <span>Sign-up</span></h3>
                <form onSubmit={handleFormSubmit}>
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
                        <button className='border-0 px-2 py-1 rounded' type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;