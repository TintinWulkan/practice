"use strict";



function makeBlackAndRed(){
    document.querySelector("div:first-child").style.backgroundColor = "black";
    document.querySelector("div:nth-child(2)").style.border = "2px solid red";
}

function makeHotpink(){
    document.querySelector("div:first-child").style.backgroundColor = "hotpink";
    document.querySelector("div:nth-child(2)").style.backgroundColor = "hotpink";
}

function makeTomato(){
    document.querySelector("div:first-child").style.backgroundColor = "tomato";
    document.querySelector("div:nth-child(2)").style.backgroundColor = "tomato";
    document.querySelector("div:nth-child(3)").style.backgroundColor = "tomato";
}

document.querySelector("div:first-child").addEventListener("click", makeBlackAndRed);
document.querySelector("div:nth-child(3)").addEventListener("click", makeHotpink);
document.querySelector("body").addEventListener("click", makeTomato);