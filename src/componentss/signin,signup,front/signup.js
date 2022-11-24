import React from "react";
import './signup.css';

function msg(){
    alert("Balancy Registration Successful!");
}
export default function Signup(){
    return(
        <>
    <div className="signup-main">
    <img src="https://res.cloudinary.com/dkmm9khbp/image/upload/v1669099106/balancy_final/bgr_hx76ak.jpg" id="f1"></img>
    <div id="d1">
        <h1 className="signuphead1">Register Here:</h1>
    </div>
    <div id="e1">
        
            <div className="c">
                <div className="signupa">
                    <label className="signupl" htmlFor="fname">Full Name:</label>
                    <input className="signupi" type="text" id="fname" name="firstname" placeholder="Your FullName.."/>
                    <label className="signupl" htmlFor="password">Password:</label>
                    <input className="signupi" type="password" id="pwd" name="pwd" placeholder="Enter your password.."/>
                    <br/>
                    <label className="signupl" htmlFor="email">E-mail:</label>
                    <input className="signupe" type="email" id="email" name="email" placeholder="Enter your e-mail.."/>
                </div>
                <div className="signupb">  
                    <label className="signupl" htmlFor="num">Height:</label>
                    <input className="signupi" type="number" id="num" name="num" placeholder="Enter your Height.."/>
                    <label className="signupl" htmlFor="num">Weight:</label>
                    <input className="signupi" type="number" id="num" name="num" placeholder="Enter your Weight.."/>
                    <label className="signupl" htmlFor="num">Age:</label>
                    <input className="signupi" type="number" id="num" name="num" placeholder="Enter your Age.."/>
                </div>
                <button className="signupbu" type="submit" onClick={msg}>Sign Up</button>   
            </div>
        
    </div>
    </div>
    </>
    )
}