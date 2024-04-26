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


function backbtn() {
    var display = document.getElementById("box-1");
    var currentValue = display.value;
   
    if (currentValue.length > 0) {
        var newValue = currentValue.slice(0, -1);
        display.value = newValue;
    }
}

