import React from "react";
import './BMI.css';
 var weight, height, measure, bmi, error ;

function Calculate(){
    weight = document.getElementById("bmiweight").value;
    height = document.getElementById("bmiheight").value;
    error = "Please enter some values";
    height /= 100;
    height *= height;
    bmi = weight/height;
    bmi = bmi.toFixed(1); 

    if (bmi <= 18.4) {
        measure = "Your BMI is " + bmi + " which means " + "you are Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        measure = "Your BMI is " + bmi + " which means " + "You are Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        measure = "Your BMI is " + bmi + " which means " + "You are Overweight";
    } else if (bmi >= 30) {
        measure = "Your BMI is " + bmi + " which means " + "You are Obese";
    }
    

    if (weight === 0 ) {
        document.getElementById("results").innerHTML = error;
    } else if (height === 0){
        document.getElementById("results").innerHTML = error;
    }
     else {

        document.getElementById("results").innerHTML = measure;
    }
    if (weight < 0) {
        document.getElementById("results").innerHTML = "Negative Values not Allowed";
    }
}
function Bmi(){
	return( 
        <div className="bmi">

    	<div className="bmipanel">
    		<h2 className="bmih2">Check your BMI</h2>
    		
    			<p id="bmiintroText" className="bmitext-center">Enter your weight and height below to check your BMI results</p>
    			
    			<form>
    				<div id="bmiweightInput">
    					<p className="paid1">Put your weight in here (KG)</p>
    		     		<input id="bmiweight" type="number" pattern="[0-9]*" className="a" />
    				</div>
    				<div id="bmiheightInput">
    					<p className="paid2">And your height in here (CM)</p>
	    				 <input id="bmiheight" type="number" pattern="[0-9]*" className="b"/> 
    				</div>
    		     <button type="button" className="bmibtn" onClick={Calculate}>Calculate BMI</button>
    		</form>
    		<div id="results" className="bmih2">Your BMI results will appear here</div>
    	</div>
    </div>
);
}
export default Bmi;