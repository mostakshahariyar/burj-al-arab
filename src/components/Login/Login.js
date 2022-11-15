import { Link } from 'react-router-dom';
import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Login.css'


const Login = () => {
    const { googleLogin, user } = useAuth();
    console.log(user);
    return (
        <div className='login-from'>
            <div className='login-from-children'>
                <h2>Login</h2>
                <form>
                    <input type="email" />
                    <br />
                    <input type="password" name="" id="" />
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