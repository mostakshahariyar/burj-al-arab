import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import '../Login/Login.css'

const Register = () => {

        const { register, user } = useAuth();
        const [email, setEmail] = useState();
        const [name, setName] = useState();
        const [password, setPassword] = useState();


        const displayName = e => {
                const nameValue = e.target.value;
                setName(nameValue);
                // console.log(emailValue);
        };
        const loginEmail = e => {
                const emailValue = e.target.value;
                setEmail(emailValue);
                // console.log(emailValue);
        };
        const loginPassword = e => {
                const passwordValue = e.target.value;
                setPassword(passwordValue);
                // console.log(emailValue);
        };

        const handelSubmit = e => {
                console.log(email, password);
                e.preventDefault();
                register(email, password, name);
        }
        // console.log("this is email and password", email, password);
        console.log(user);

        return (
                <div className='login-from'>
                        <div className='login-from-children'>
                                <h2>Register</h2>
                                <form onSubmit={handelSubmit}>
                                        <input type="email" onBlur={loginEmail} placeholder='Enter your email' required />
                                        <br />
                                        <input onBlur={loginPassword} type="password" placeholder='Password' name="" id="" required />
                                        <br />
                                        <input type='text' onBlur={displayName} placeholder='Enter your name' required />
                                        <br />
                                        <br />
                                        <button className='btn-regular'>Register</button>
                                </form>


                                <p>Already you have account? <Link to='/login'>Login</Link></p>

                        </div>
                </div>
        );
};

export default Register;