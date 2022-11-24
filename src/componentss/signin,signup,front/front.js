import React from "react";
import './front.css';
import { Link } from "react-router-dom";
function Front(){
    return(
        <div className="front">
            <img src="https://res.cloudinary.com/dkmm9khbp/image/upload/v1669099105/balancy_final/bgf_agz6m8.jpg" id="a1"></img>
        <div id="b1">
        <h1 className="fronta">Balancy</h1>
        <p className="frontp">"The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison."</p>
        <button className="butfront"><Link to="/signin" className="frontjou">The Journey to being healthy begins here.</Link></button>
        </div>
        </div>
    )
}
export default Front;