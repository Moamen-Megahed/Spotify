let myCont = document.getElementById("cont")
let melok = document.getElementById("melok")
let liked = document.getElementById("liked")
let nosta = document.getElementById("nosta")
let amr = document.getElementById("amr")
let pab = document.getElementById("pab")
let lege = document.getElementById("lege")


melok.onmouseenter = function(){
    myCont.style.cssText = "background: linear-gradient(180deg, rgb(21 54 45), #121212);"
}

liked.onmouseenter = function(){
    myCont.style.cssText = "background: linear-gradient(180deg, rgb(21 24 54), #121212);"
}

nosta.onmouseenter = function(){
    myCont.style.cssText = "background: linear-gradient(180deg, rgb(54 54 21), #121212)"
}

amr.onmouseenter = function(){
    myCont.style.cssText = "background: linear-gradient(180deg, rgb(13 73 97), #121212);"
}

pab.onmouseenter = function(){
    myCont.style.cssText = "background: linear-gradient(180deg, rgb(85 46 11), #121212);"
}

lege.onmouseenter = function(){
    myCont.style.cssText = "background: linear-gradient(180deg, rgb(41 13 56), #121212);"
}