"use strict";

console.log("Hello from external JavaScript")
alert("Welcome to my Website!");

// JavaScript with HTML Exercises
var userInput = prompt("What's your favorite color?");
console.log("The user's favorite color is " + userInput);
alert("Great, my favorite color is " + userInput + " too!");

// Testing my limits to see how creative I could get with JS.

var classFull = confirm("Is the class full?");
if (classFull === false) {
    console.log("The class is not full.");
}  else if (classFull === true) {
    console.log("The class is full.")
}

var scheduleConflict = confirm("Does your current schedule conflict with this class?");
if (scheduleConflict === false) {
    console.log("The Student's current schedule does not conflict with this class.")
} else if (scheduleConflict === true) {
    console.log("The Student's current schedule conflicts with this class.")
}

var productOffer = confirm("Did customer buy more than 2 items?");
if (productOffer === false) {
    console.log("The customer did not buy more than 2 items.")
} else if (productOffer === true) {
    console.log("The customer bought more than 2 items.")
}

var premiumMember = confirm("Are you a premium member?")
if (premiumMember === false) {
    console.log("The customer is not a premium member.")
} else if (premiumMember === true) {
    console.log("The customer is a premium member.")
}


