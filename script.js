var number1, number2, result;

function addition () {
    let t1=document.getElementById("num1").value;
    let t2=document.getElementById("num2").value;
    result = Number(t1) + Number(t2);
    document.getElementById("output").innerHTML=result;
}

function subtraction () {
    let t1=document.getElementById("num1").value;
    let t2=document.getElementById("num2").value;
    result = Number(t1) - Number(t2);
    document.getElementById("output").innerHTML=result;
}
function multiplication () {
    let t1=document.getElementById("num1").value;
    let t2=document.getElementById("num2").value;
    result = Number(t1) * Number(t2);
    document.getElementById("output").innerHTML=result;
}
function division () {
    let t1=document.getElementById("num1").value;
    let t2=document.getElementById("num2").value;
    result = Number(t1) / Number(t2);
    document.getElementById("output").innerHTML=result;
}
function modulas () {
    let t1=document.getElementById("num1").value;
    let t2=document.getElementById("num2").value;
    result = Number(t1) % Number(t2);
    document.getElementById("output").innerHTML=result;
}