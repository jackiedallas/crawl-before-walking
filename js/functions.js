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
var random = Math.floor((Math.random() * 500) + 1);

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
	console.log("Our number is: " + x)
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
function tip (x, y) {
	var total = x * y;
	return total.toFixed(2);
}
console.log(tip(.2, 30));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
function calculateTip() {
	alert("Your bill total was $" + random);
	var tipPercent = prompt("What percentage would you like to tip?");
	console.log("Customer tipped " + tipPercent + "%")
	var totalTip = Number(tipPercent) / 100;
	var total = ((totalTip * random) + random);
	confirm("Your total is $" + total.toFixed(2));
	console.log("Customer total is $" + total.toFixed(2));
}
calculateTip();
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
	var price = random;
	var discount = .5;
	var newPrice = price * discount;
	return "Discounted price is $" + newPrice.toFixed(2);
}
console.log("Calculating discounted price...")
console.log(applyDiscount());


// // Make a function called returnTwo() that returns the number 2 when called
// function returnTwo() {
// 	return 2;
// }
//
// // Test this function with console.log(returnTwo())
// console.log(returnTwo());
//
// //     Make a function called sayHowdy() which console.logs the string “Howdy!”
// function sayHowdy() {
// 	console.log("Howdy!");
// }
//
// //     Test this function by directly calling sayHowdy()
// sayHowdy();
// // Remember this function does not need a defined return value
//
// // Make a function called returnName() that returns the string of your name
// function returnName() {
// 	return "Jackie";
// }
//
// // Test this function with console.log(returnName())
// console.log(returnName());
//
// //     Make a function called addThree() which takes in a number input and returns the number plus 3.
// function addThree(x) {
// 	return x + 3;
// }
//
// // Test this function with console.log(addThree(5))
// console.log(addThree(5));
//
// //     Make a function called sayString() which returns the string input passed in.
// function sayString(string) {
// 	return string;
// }
//
// // Test this function with console.log(sayString('codeup'))
// console.log(sayString("Codeup"));
//
// //     Challenge Function Drills
// // Write a function called identity(input) that takes in an argument called input and returns that input.
// function identity(input) {
// 	return input;
// }
//
// //     Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.
// function getRandomNumber(min, max) {
//
// }
// // Write a function called first(input) that returns the first character in the provided string.
// function first (input) {
// 	var firstCh = input.charAt(0);
// 	return firstCh;
// }
// console.log(first('Codeup'));
//
// //     Write a function called last(input) that returns the last character of a string
// function last(input) {
// 	var lastCh = input.charAt(input.length - 1);
// 	return lastCh;
// }
// console.log(last('Codeup'));
//
// // Write a function called rest(input) that returns everything but the first character of a string.
// function rest(input) {
// 	return input.substring(1, (input.length - 0));
// }
// console.log(rest('Codeup'));
//
// //     Write a function called reverse(input) that takes a string and returns it reversed.
// function reverseCodeup(input) {
// 	var a = input.substring(0, (input.length - 0));
// 	return a;
//
// }
// console.log(reverseCodeup('Codeup'));
//     Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
//     Write a function called count(input) that takes in a string and returns the number of characters.
//     Write a function called add(a, b) that returns the sum of a and b
// Write a function called subtract(a, b) that return the difference between the two inputs.
//     Write multiply(a, b) function that returns the product
// Write a divide(numerator, denominator) function that returns a divided by b
// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
// Write the function square(a) that takes in a number and returns the number multiplied by itself.
//     Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.


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