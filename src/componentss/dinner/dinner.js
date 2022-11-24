import React from 'react';
import './dinner.css';

var parota_calorie=0;
var chappathi_calorie=0;
var chkn_rice=0;
var chkn_noodles=0;
var naan=0;
var dosa=0;
var chkn_sandwich=0;
var dnone=1;
function dgenerate1()
{
    var a=document.getElementById("dish_one").value;
    var dtemp1=(250*a);
    parota_calorie=dtemp1;
}
function dgenerate2()
{
    var b=document.getElementById("dish_two").value;
    var dtemp2=(71*b);
    chappathi_calorie=dtemp2;
}
function dgenerate3()
{
    var c=document.getElementById("dish_three").value;
    var dtemp3=(343*c);
    chkn_rice=dtemp3;
}
function dgenerate4()
{
    var d=document.getElementById("dish_four").value;
    var dtemp4=(308*d);
    chkn_noodles=dtemp4;
}
function dgenerate5()
{
    var e=document.getElementById("dish_five").value;
    var dtemp5=(133*e);
    dosa=dtemp5;
}
function dgenerate6()
{
    var f=document.getElementById("dish_six").value;
    var dtemp6=(262*f);
    naan=dtemp6;
}
function dgenerate7()
{
    var g=document.getElementById("dish_seven").value;
    var dtemp7=(283*g);
    chkn_sandwich=dtemp7;
}
function dgenerate8()
{
    dnone=0;
}
function dinnercalorie()
{
    alert((parota_calorie+chappathi_calorie+chkn_sandwich+chkn_rice+chkn_noodles+dosa+naan)*dnone);
}

export default function Dinner()
{
    return(
        <>
        <div id='bd1'>
        <div>
    <h1 style={{color:'chartreuse'}}>The dinner hour is a sacred, happy time</h1><br/><br/><br/>
     </div>
    <div class="Dinner">
    <input type="checkbox"/>
    <label className="dinnerlabel" htmlFor="dinner_one">Parotta</label><br/><br/>
    <input type="checkbox"/>
    <label className="dinnerlabel" htmlFor="dinner_two">Chappathi</label>
    <br/><br/>
    <input type="checkbox"/>
    <label className="dinnerlabel" htmlFor="dinner_three">Chicken-Fried Rice</label><br/><br/>
    <input type="checkbox"/>
    <label className="dinnerlabel" htmlFor="dinner_four">Chicken-Noodles</label><br/><br/>
    <input type="checkbox"/>
    <label className="dinnerlabel" htmlFor="dinner_five">Dosa</label><br/><br/>
    <input type="checkbox"/>
    <label className="dinnerlabel" htmlFor="dinner_six">Naan</label><br/><br/>
    <input type="checkbox"/>
    <label className="dinnerlabel" htmlFor="dinner_seven">Chicken-Sandwich</label>
    <br/><br/><br/>
   
    <label className="dinnerlabel" htmlFor="dinner_none">Skipped</label>
    <input type="radio" onClick={dgenerate8}/>
    <br/>
    </div>
    <div class="dnbox">
        <input type="number" id="dish_one"/>
        <input type="radio" className='raddin' onClick={dgenerate1}/>
        <br/><br/>
        <input type="number" id="dish_two"/>
        <input type="radio" className='raddin' onClick={dgenerate2}/>
        <br/><br/>
        <input type="number" id="dish_three"/>
        <input type="radio" className='raddin' onClick={dgenerate3}/>
        <br/><br/>
        <input type="number" id="dish_four"/>
        <input type="radio" className='raddin' onClick={dgenerate4}/>
        <br/><br/>
        <input type="number" id="dish_five"/>
        <input type="radio" className='raddin' onClick={dgenerate5}/>
        <br/><br/>
        <input type="number" id="dish_six"/>
        <input type="radio" className='raddin' onClick={dgenerate6}/>
        <br/><br/>
        <input type="number" id="dish_seven"/>
        <input type="radio" className='raddin' onClick={dgenerate7}/>
        </div>
        <div class="dfgt">
            <br/><br/>
            <h2 className='dinnerhead2'>Click Here To Generate</h2>
        <button className='butdin' onClick={dinnercalorie}>Generate</button>
        </div>
        </div>
    </>
    );
} 