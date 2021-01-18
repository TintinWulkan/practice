"use strict";

function makeBlackAndRed(){
    document.getElementById("div1").style.backgroundColor = "black";
    document.getElementById("div2").style.border = "1px solid red";
}

function makeHotpink(){
    document.getElementById("div1").style.backgroundColor = "hotpink";
    document.getElementById("div2").style.backgroundColor = "hotpink";
}

function makeTomato(event){
    document.getElementById("div1").style.backgroundColor = "tomato";
    document.getElementById("div2").style.backgroundColor = "tomato";
    document.getElementById("div3").style.backgroundColor = "tomato";
    event.stopPropagation();
}

document.getElementById("div1").addEventListener("click", makeBlackAndRed);
document.getElementById("div3").addEventListener("click", makeHotpink);
document.querySelector("body").addEventListener("click", makeTomato);