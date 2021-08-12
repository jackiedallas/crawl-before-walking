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

var littleM = prompt("How many days do you want to rent Little Mermaid?");
    console.log("The customer wants to rent The Little Mermaid for " + littleM + " days.");
var brotherB = prompt("How many days do you want to rent Brother Bear?");
    console.log("The customer wants to rent Brother Bear for " + brotherB + " days.");
var hercules = prompt("How many days do you want to rent Hercules?");
    console.log("The customer wants to rent Hercules for " + hercules + " days.");

var finalTotal = (littleM * 3) + (brotherB * 3) + (hercules * 3);
alert("Your total is $" + finalTotal + ".");
console.log("The customer's total price is $" + finalTotal + ".");

var google = prompt("How many hours did you work at Google this week?");
    console.log("User worked at Google " + google + " hours this week.");

var amazon = prompt("How many hours did you work at Amazon this week?");
    console.log("User worked at Amazon " + amazon + " hours this week.");

var facebook = prompt("How many hours did you work at Facebook this week?");
    console.log("User worked at Facebook " + facebook + " hours this week.");

var totalPay = (google * 400) + (amazon * 380) + (facebook * 350);
alert("Your total pay for this week is $" + totalPay + "!");
console.log("User's total pay is $" + totalPay + " this week!" );

