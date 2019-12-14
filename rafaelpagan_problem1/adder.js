"use strict";

//window.alert("hello");
function add() {
    //get the two numbers from the "num1" and "num2" input boxes and sotre in variables
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    //make sure both boxes have input
    if (hasdata(num1) && hasdata(num2)) {
        var n1 = Number(num1.value);

        var n2 = Number(num2.value);

        var sum = n1 + n2;

        document.getElementById("answer").innerHTML = n1 + " + " + n2 + " = " + sum;

    }
}

function sub() {
    //get the two numbers from the "num1" and "num2" input boxes and sotre in variables
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    //make sure both boxes have input
    if (hasdata(num1) && hasdata(num2)) {
        var n1 = Number(num1.value);

        var n2 = Number(num2.value);

        var sub = n1 - n2;

        document.getElementById("answer").innerHTML = n1 + " - " + n2 + " = " + sub;

    }
}


function multiply() {
    //get the two numbers from the "num1" and "num2" input boxes and sotre in variables
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    //make sure both boxes have input
    if (hasdata(num1) && hasdata(num2)) {
        var n1 = Number(num1.value);

        var n2 = Number(num2.value);

        var multiply = n1 * n2;

        document.getElementById("answer").innerHTML = n1 + " * " + n2 + " = " + multiply;

    }
}

function divide() {
    //get the two numbers from the "num1" and "num2" input boxes and sotre in variables
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    //make sure both boxes have input
    if (hasdata(num1) && hasdata(num2)) {
        var n1 = Number(num1.value);

        var n2 = Number(num2.value);

        var divide = n1 / n2;

        document.getElementById("answer").innerHTML = n1 + " / " + n2 + " = " + divide;

    }
}

function reset() {
    //window.alert("reset");
    //clear the elemetns on the page
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("answer").value = "";

}

function hasdata(element) {
    //make sure there is data in this element
    if (element.value == "") {
        window.alert("missing input");
        return false;
    }
    return true;
}