import React, { useState } from 'react';
import './SignUp.css';
const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [] = useState('');
    return (
        <div className='d-flex justify-content-center my-5'>
            <div className="form-container">
                <h3>Please <span>Sign-up</span></h3>
                <form >
                    <div className='input-field'>
                        <input type="text" name="name" placeholder='Enter name' id="" />
                    </div>
                    <div className='input-field'>
                        <input type="email" name="email" placeholder='Enter email' id="" />
                    </div>
                    <div >
                        <input type="password" name="password" placeholder="Enter password" />
                        <input type="password" name="confirm-password" placeholder="Confirm password" />
                    </div>
                    <div >
                        <input type="tel" name="phone-number" placeholder='Phone Number' id="" />
                        <input type="text" name="address" placeholder='Enter address' id="" />
                    </div>
                    <div className='submit-field'>
                    <input type="checkbox" name="" id="" /> <span id='form-q'>Already a user?</span><br />
                    <button className='border-0 px-2 py-1 rounded' type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;