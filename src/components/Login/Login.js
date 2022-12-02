import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Login.css'
import { useState } from 'react';


const Login = () => {
    const navigate = useNavigate();
    const { user, signinUser, googleLogin } = useAuth();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handelEmail = e => {
        const emailValue = e.target.value;
        setEmail(emailValue);
    };
    const handelPassword = e => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
    };
    const handelSubmit = e => {
        e.preventDefault();
        signinUser(email, password);
        console.log(email, password);
        // navigate("/home");

    }
    console.log(user);
    return (
        <div className='login-from'>
            <div className='login-from-children'>
                <h2>Login</h2>
                <form onSubmit={handelSubmit}>
                    <input type="email" onBlur={handelEmail} placeholder='Enter your email' required />
                    <br />
                    <input type="password" onBlur={handelPassword} placeholder='Password' name="" id="" required />
                    <br />
                    <br />
                    <button className='btn-regular'>Login</button>
                </form>
                <p>--------- or -------------</p>
                <div>
                    <button className='btn-regular'
                        onClick={googleLogin}
                    >Google sign in</button>
                    <p>You have no account? <Link to='/register'>Create account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;