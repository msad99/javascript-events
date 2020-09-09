var form = document.querySelector("#form");
var billede = document.querySelector("#billede");

document.querySelector("#button").addEventListener("click",click,true);
document.querySelector("#form").addEventListener("focus",focus,true);
document.querySelector("#billede").addEventListener("mouseover",mouse,true);
document.querySelector("#form").addEventListener("keydown",keyd,true);
document.querySelector("#form").addEventListener("keyup",keyup,true);
document.querySelector("#form").addEventListener("blur",blur,true);
document.querySelector("#billede").addEventListener("dblclick",dblclick,true);

function click(){
    if(document.body.style.background = "white"){ 
           document.body.style.background = "black";
        }
}

function focus(){
    form.value = "";
}

function mouse(){
    billede.src="billeder/Tmc.png";
}

function keyd(){
    billede.src = "billeder/TmcStroked.png";
}

function keyup(){
    billede.src = "billeder/giphy.gif";
}

function blur(){
    form.value = "Dette er en form";
}

function dblclick(){
    document.body.style.background = "white";
}