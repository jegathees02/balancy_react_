import React from 'react';
import './breakfastcss.css';

var idly=0;
var dosa=0;
var venpongal=0;
var poori=0;
var semiyaupma=0;
var uttaapam=0;
var aapam=0;          
var medhuvadai=0;
var bfnone=1;
const bfgenerate1=()=>
{
    var bf1=document.getElementById("bfdish_one").value;
    var bftemp1 = bf1*51;
    idly= bftemp1;
}
function bfgenerate2()
{
    var bf2=document.getElementById("bfdish_two").value;
    var bftemp2=bf2*133;
    dosa = bftemp2;
}
function bfgenerate3()
{
    var bf3=document.getElementById("bfdish_three").value;
    var bftemp3=bf3*212;
    venpongal = bftemp3;
}
function bfgenerate4()
{
    var bf4=document.getElementById("bfdish_four").value;
    var bftemp4=bf4*101;
    poori = bftemp4;
}
function bfgenerate5()
{
    var bf5=document.getElementById("bfdish_five").value;
    var bftemp5=bf5*107;
    semiyaupma = bftemp5;
}
function bfgenerate6()
{
    var bf6=document.getElementById("bfdish_six").value;
    var bftemp6=bf6*94;
    uttaapam = bftemp6;
}
function bfgenerate7()
{
    var bf7=document.getElementById("bfdish_seven").value;
    var bftemp7=bf7*99;
    aapam = bftemp7;
}
function bfgenerate8()
{
    var bf8=document.getElementById("bfdish_eight").value;
    var bftemp8=bf8*97;
    medhuvadai = bftemp8;
}
function bfgenerate9()
{
    bfnone=0;
}  
function bfstcalorie()
{
   alert((idly+dosa+venpongal+medhuvadai+uttaapam+aapam+semiyaupma+poori)*(bfnone));
}
export default function Breakfast () {
      return (
        <div className='br1'>
          <div><br />
              <h1 style={{color: 'darkseagreen'}}>Breakfast means a moment of uninterrupted peace</h1><br /><br /><br /><br />
          </div>
          <div className="bfBF">
            <input type="checkbox" />
            <label className="bflabel" htmlFor='dish_one'>IDLY</label><br /><br />
            <input type="checkbox" />
            <label className="bflabel" htmlFor="dish_two">Dosa</label><br /><br />
            <input type="checkbox" />
            <label className="bflabel" htmlFor="dish_three">Ven-Pongal</label><br /><br />
            <input type="checkbox" />
            <label className="bflabel" htmlFor="dish_four">Poori</label><br /><br />
            <input type="checkbox" />
            <label className="bflabel" htmlFor="dish_five">Semiya Upma</label><br /><br />
            <input type="checkbox" />
            <label className="bflabel" htmlFor="dish_six">Uthaapam</label><br /><br />
            <input type="checkbox" />
            <label className="bflabel" htmlFor="dish_seven">AAPPAM</label><br /><br />
            <input type="checkbox" />
            <label className="bflabel" htmlFor="dish_eight">Medhu-Vadai</label><br /><br /><br /><br />

            <label className="bflabel1" htmlFor="dish_none">Skipped</label><input type="radio" onClick={bfgenerate9}/>
            <br /><br /></div>
          <div className="bfbox">
            <input type="number" id="bfdish_one" />
            <input type="radio" className='radbre' onClick={bfgenerate1} />
            <br /><br />
            <input type="number" id="bfdish_two" />
            <input type="radio" className='radbre' onClick={bfgenerate2} />
            <br /><br />
            <input type="number" id="bfdish_three" />
            <input type="radio" className='radbre' onClick={bfgenerate3} />
            <br /><br />
            <input type="number" id="bfdish_four" />
            <input type="radio" className='radbre' onClick={bfgenerate4} /><br />
            <br />
            <input type="number" id="bfdish_five" />
            <input type="radio" className='radbre' onClick={bfgenerate5} /><br />
            <br />
            <input type="number" id="bfdish_six" />
            <input type="radio" className='radbre' onClick={bfgenerate6} /><br />
            <br /><br />
            <input type="number" id="bfdish_seven" />
            <input type="radio" className='radbre' onClick={bfgenerate7} /><br />
            <br />
            <input type="number" id="bfdish_eight" />
            <input type="radio" className='radbre' onClick={bfgenerate8} />
            <br /><br />
          </div>
          <div className="bfgt">
            <br /><br /><br />
            <h2 style={{color: 'aqua'}}>Click Here To Generate</h2>
            <button onClick={bfstcalorie}>Generate</button>
          </div>
        </div>
      );
}