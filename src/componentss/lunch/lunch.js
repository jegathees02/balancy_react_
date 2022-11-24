import React from 'react';
import './lunch.css';

var fullmeals=0;
var sambar=0;
var rasam=0;
var lemonrice=0;
var fishbriyani=0;
var chickenbriyani=0;
var curdrice=0;
var vegbriyani=0;
var lunchnone=1;
function lungenerate1()
{
    var ln1=document.getElementById("lunbxdish_one").value;
    var ltemp1=(500*ln1);
    fullmeals=ltemp1;
}
function lungenerate2()
{
    var ln2=document.getElementById("lunbxdish_two").value;
    var ltemp2=(215*ln2);
    sambar=ltemp2;
}
function lungenerate3()
{
    var ln3=document.getElementById("lunbxdish_three").value;
    var ltemp3=(60*ln3);
    rasam=ltemp3;
}
function lungenerate4()
{
    var ln4=document.getElementById("lunbxdish_four").value;
    var ltemp4=(227*ln4);
    lemonrice=ltemp4;
}
function lungenerate5()
{
    var ln5=document.getElementById("lunbxdish_five").value;
    var ltemp5=(383*ln5);
    fishbriyani=ltemp5;
}
function lungenerate6()
{
    var ln6=document.getElementById("lunbxdish_six").value;
    var ltemp6=(360*ln6);
    chickenbriyani=ltemp6;
}
function lungenerate7()
{
    var ln7=document.getElementById("lunbxdish_seven").value;
     var ltemp7=(376*ln7);
     curdrice=ltemp7;   
}
function lungenerate8()
{
    var ln8=document.getElementById("lunbxdish_eight").value;
    var ltemp8=(241*ln8);
    vegbriyani=ltemp8;
}
function lungenerate9()
{
    lunchnone=0;
}
function lunchtotal()
{
    alert((fullmeals+sambar+rasam+chickenbriyani+fishbriyani+vegbriyani+curdrice+lemonrice)*lunchnone);
}

export default function Lunch()
{
    return(
        <>
        <div id='l1'>
        <h1 style={{color:'lawngreen'}}> Lunch is not an excuse to cheat for the day.</h1><br/>
    <div class="Lunch">
    <input type="checkbox"/>
    <label htmlFor="lunch_one">Full-Meals</label><br/><br/>
    <input type="checkbox"/>
    <label htmlFor="lunch_two">Sambar-Rice</label><br/><br/>
    <input type="checkbox"/>
    <label htmlFor="lunch_three">Rasam-Rice</label><br/><br/>
    <input type="checkbox"/>
    <label htmlFor="lunch_four">Lemon-Rice</label><br/><br/>
    <input type="checkbox"/>
    <label htmlFor="lunch_five">Fish-Briyani</label><br/><br/>
    <input type="checkbox"/>
    <label htmlFor="lunch_six">Chicken-Briyani</label><br/><br/>
    <input type="checkbox"/>
    <label htmlFor="lunch_seven">Curd-Rice</label><br/><br/>
    <input type="checkbox"/>
    <label htmlFor="lunch_eight">Veg-Briyani</label><br/><br/>
    <h2><label htmlFor="lunch_none">Skipped</label>
        <input type="radio" onClick={lungenerate9} /></h2>
</div>
<div class="lunbx">
    <input type="number" id="lunbxdish_one"/>
        <input type="radio" className='radlun' onClick={lungenerate1}/>
        <br/><br/><br/>
        <input type="number" id="lunbxdish_two"/>
        <input type="radio" className='radlun' onClick={lungenerate2}/>
        <br/><br/><br/>
        <input type="number" id="lunbxdish_three"/>
        <input type="radio" className='radlun' onClick={lungenerate3}/>
        <br/><br/><br/>
        <input type="number" id="lunbxdish_four"/>
        <input type="radio" className='radlun' onClick={lungenerate4}/>
        <br/><br/><br/>
        <input type="number" id="lunbxdish_five"/>
        <input type="radio" className='radlun' onClick={lungenerate5}/>
        <br/><br/><br/>
        <input type="number" id="lunbxdish_six"/>
        <input type="radio" className='radlun' onClick={lungenerate6}/>
        <br/><br/><br/>
        <input type="number" id="lunbxdish_seven"/>
        <input type="radio" className='radlun' onClick={lungenerate7}/>
        <br/><br/><br/>
        <input type="number" id="lunbxdish_eight"/>
        <input type="radio" className='radlun' onClick={lungenerate8}/>
        <br/><br/>
        
</div>
<div class="lngt">
    <h1 className='lunchhead1'>Click here to generate</h1>
    <button className='butlunch' onClick={lunchtotal}>Generate</button>
</div>
</div>
</>
    )
}