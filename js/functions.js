"use strict"

// Practice
function weeklyPay(x, y) {
    var googlePay = (x * 40);
    var amazonPay = (y * 50);
    var totalPay = googlePay + amazonPay;
    console.log("$" + totalPay.toFixed(2));
}
//Practice
function increment(x) {
    return x + 1;
}

var c = increment(2);
var a = increment(0);
var b = increment(1);

function sum(a, b) {
    return a + b;
}

var d = 4;
var e = sum + 4;

// a function with no return value
function shout(message) {
    alert(message.toUpperCase() + "!!!");
}

var returnValue = shout('hello there');
console.log(returnValue); // undefined