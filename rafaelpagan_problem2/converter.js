"use strict";

//window.alert("hello");
function convertToCelcius() {
    //get the two numbers from the "num1" and "num2" input boxes and sotre in variables
    var n1 = Number(document.getElementById("num1").value)
    if (hasdata(num1)) {
        var n1 = Number(num1.value);

        var convertToCelcius = (n1 - 32) * 5 / 9;

        document.getElementById("answer").innerHTML = "(" + n1 + " - 32) * 5 / 9" + " = " + convertToCelcius;

    }
}

function convertToFahrenheit() {
    //get the two numbers from the "num1" and "num2" input boxes and sotre in variables
    var n1 = Number(document.getElementById("num1").value)
    if (hasdata(num1)) {
        var n1 = Number(num1.value);

        var convertToFahrenheit = n1 * (9 / 5) + 32;

        document.getElementById("answer").innerHTML = n1 + " * (9/5) + 32 " + " = " + convertToFahrenheit;

    }
}

function reset() {
    //window.alert("reset");
    //clear the elemetns on the page
    document.getElementById("num1").value = "";
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