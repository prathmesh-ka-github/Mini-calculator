var n1, n2;
let val;
function put1(val){
    document.getElementById("put").value+=val;
    console.log(document.getElementById("put").value);
    document.getElementById("put").style.color="white";
}
function clr(){
    document.getElementById("put").value='';
    document.getElementById("put").style.color="white";
}
function solve(){
    let x = document.getElementById("put").value;
    let y = eval(x);
    document.getElementById("put").value=y;
    document.getElementById("put").style.color="#39ff14";
    console.log("solving...")
    console.log(">> " + y)
}