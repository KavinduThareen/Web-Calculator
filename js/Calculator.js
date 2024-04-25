const display = document.getElementById("box-1");

function appendToDisplay(input){
    display.value += input;
}

function cleardisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}
