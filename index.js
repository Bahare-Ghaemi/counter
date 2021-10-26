var number = 0;
var msg = "";

function decFunc() {
    number = document.getElementById('countNum').innerHTML;
    if (number == 0) {
        msg = "INVALID input!";
    }
    else if (number == "INVALID input!") {
        msg = 0;
    } 
    else{
        number = number - 1;
        msg = number;
    }
    document.getElementById('countNum').innerHTML = msg;
}

function incFunc(){
    if (number == "NaN") {
        number = 0;
    } 
    number = parseInt(document.getElementById('countNum').innerHTML);
    number = number + 1;
    document.getElementById('countNum').innerHTML = number;
}
function resetFunc(){
    number = document.getElementById('countNum').innerHTML;
    number = 0;
    document.getElementById('countNum').innerHTML = number;
}