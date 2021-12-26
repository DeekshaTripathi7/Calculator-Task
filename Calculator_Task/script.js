
function click1(){
    document.getElementById("calc").display.value+= 1;
}
function click2(){
    document.getElementById("calc").display.value+= 2;  
}
function click3(){
    document.getElementById("calc").display.value+= 3;
}
function click4(){
    document.getElementById("calc").display.value+= 4;
}
function click5(){
    document.getElementById("calc").display.value+= 5;
}
function click6(){
    document.getElementById("calc").display.value+= 6;
}
function click7(){
    document.getElementById("calc").display.value+= 7;
}
function click8(){
    document.getElementById("calc").display.value+= 8;
}
function click9(){
    document.getElementById("calc").display.value+= 9;
}
function click0(){
    document.getElementById("calc").display.value+= 0;
}
function clickDecimal(){
    document.getElementById("calc").display.value+= ".";
}
function clickAdd(){
    document.getElementById("calc").display.value+= "+";
}
function clickSub(){
    document.getElementById("calc").display.value+= "-";
}
function clickMul(){
    document.getElementById("calc").display.value+= "*";
}
function clickDiv(){
    document.getElementById("calc").display.value+= "/";
}
function clickClear(){
    document.getElementById("calc").display.value= "";
}
function clickEqual(){
    let result = eval(document.getElementById("calc").display.value);
    document.getElementById("calc").display.value = result;
}

function dummy(){
    document.getElementById("calc").style.accentColor = white;
}