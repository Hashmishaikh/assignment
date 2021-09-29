import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div>
            <div className="signup">
                <span className="signupTitle">SignUp</span>
                <form className="signupForm">
                    <label>Name</label>
                    <input className="signupInput" type="text" placeholder="Enter your username..." />
                    <label>Contact Number</label>
                    <input className="signupInput" type="text" placeholder="Enter your contact number..." />
                    <label>Email</label>
                    <input className="signupInput" type="text" placeholder="Enter your email..." />
                    <label>Password</label>
                    <input className="signupInput" type="password" placeholder="Enter your password..." />
                    <label>Confirm Password</label>
                    <input className="signupInput" type="password" placeholder="Enter your confirmpassword..." />
                    <button className="signupButton">Register</button>
                </form>
                <Link to="/login">
                <button className="signupLoginButton">Login</button>
                </Link>
            </div>
        </div>
    )
}

export default SignUp
