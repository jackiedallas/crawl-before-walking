"use strict";
/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
    //var name = "jackie"
    return "Hello " + name;
}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
var helloMessage = sayHello("Jackie");

console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName = "Jackie"
console.log(sayHello(myName));
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(x) {
    return x === 2;
}
console.log(isTwo(random));
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
function calculateTip (x, y) {
    var total = x * y;
    return total.toFixed(2);
}

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
alert("Your bill total was $" + random);
var tipPercent = prompt("What percentage would you like to tip?");
console.log("Customer tipped " + tipPercent + "%")
var totalTip = Number(tipPercent) / 100;
var total = ((totalTip * random) + random);
confirm("Your total is $" + total.toFixed(2));
console.log("Customer total is $" + total.toFixed(2));
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount() {
    var price = 500;
    var discount = .5;
    var newPrice = price * discount;
    return newPrice;
}
console.log(applyDiscount());






// (function () {
//
//     console.log("Welcome to Functions");
//
// //Define named functions
//     function sayHello() {
//         console.log("Hello!");
//     }
//
//     sayHello();
//
// //Define an anonymous function
//     var sayHowdy = function () {
//         console.log("Howdy!");
//     }
//     sayHowdy();
//
// //Arguments and Parameters
//     function add(x, y) {
//         return x + y;
//     }
//
//     console.log('add(1 + 2) = ' + add(1, 2));
//
//     function subtract(num1, num2) {
//         return num1 - num2;
//     }
//
//     console.log('subtract(10 - 5) = ' + subtract(10, 5));
//
// // Scope
//     var dad = "jackie";
//     var mom = "kayla";
//     var children = "jackson and simon"
//
//     function parents() {
//         return mom + " and " + dad + " are the parents of";
//     }
//
//     function statement() {
//         //var children = "jackson and simon"
//         console.log(mom + " and " + dad + " are the parents of " + children);
//     }
//
//     var hello = alert(statement());
//     return hello;
    //did not alert as expected.
// })();
// Practice
// function weeklyPay(x, y) {
//     var googlePay = (x * 40);
//     var amazonPay = (y * 50);
//     var totalPay = googlePay + amazonPay;
//     console.log("$" + totalPay.toFixed(2));
// }
// //Practice
// function increment(x) {
//     return x + 1;
// }
//
// var c = increment(2);
// var a = increment(0);
// var b = increment(1);
//
// function sum(a, b) {
//     return a + b;
// }
//
// var d = 4;
// var e = sum + 4;
//
// // a function with no return value
// function shout(message) {
//     alert(message.toUpperCase() + "!!!");
// }
//
// var returnValue = shout('hello there');
// console.log(returnValue); // undefined