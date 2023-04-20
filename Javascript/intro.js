console.log(document.getElementById('balloon').innerHTML);
let balloon=document.getElementById('balloon');
let red=document.getElementById('red');
let blue=document.getElementById('blue');
let yellow=document.getElementById('yellow');
let pos=0



function see(){
    alert(1234);
}

see();

function turnRed(){
    balloon.style.backgroundColor='red'
}

function turnBlue(){
    balloon.style.backgroundColor='blue'
}

function turnYellow(){
    balloon.style.backgroundColor='yellow'
}
function left(){
    pos=pos-20;
    balloon.style.marginLeft=pos+`px`;
}
function right(){
    pos=pos+20;
    balloon.style.marginLeft=pos+`px`;
}

function top(){
    pos=pos-20;
    balloon.style.marginTop
}