import React from 'react';
import './signin.css';
import { Link } from 'react-router-dom';

export default function Signin()
{
    return(
        <div className='sing1'>
        
        <h1 className='signinh1' align="center">Balancy</h1>
    <p className='signinp'>"Let food be thy medicine,the medicine shall be the food."</p>
    <div className='signind'>
        <h3 className= "signinh3" >Log into your account:</h3><br/><br/><br/>
        
            <label className='signinl' HtmlFor="name">User Name:</label>
            <input className='signini' type="text" id="name" name="name" placeholder="Enter your username.." required/>
            <label className='signinl' htmlFor="password">Password:</label>
            <input className='signini' type="password" id="pwd" name="pwd" placeholder="Enter your password.." required/>  
            <button className='butsignin' type="button"><Link to="/dashboard" className='signinlo'>Login</Link></button>
             
        <h3 className='signinl'>Don't have an account?<Link to="/signup" className='signincli'>Click here.</Link></h3>
    </div>
    </div>
    );
}