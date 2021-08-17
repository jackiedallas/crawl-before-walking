console.log("Practice makes Perfect!");
console.log(" ")


// function inClass() {
// 	var isaWeekday = confirm("Is it a weekday?")
// 	var between9_5 = confirm("Is it between 9am and 5pm?")
//
// 	if (isaWeekday && between9_5) {
// 		alert("Jackie is in class.")
// 	} else {
// 		alert("Jackie is not in class.")
// 	}
// }
// inClass();
//
// // ////////////////////////////////////////////////////////////////////////////
//
// var isAWeekDay = confirm("Is it a weekday?");
// var between9_5 = confirm("Is it between 9 AM and 5 PM?")
// var classMeet = confirm("Are you meeting on the weekend?")
//
// console.log("Is Jackie in class? " + ((isAWeekDay && between9_5) || classMeet))

// ////////////////////////////////////////////////////////////////////////////
//
// function moisterize() {
// 	var isAshy = confirm("Are you ashy?")
// 	var hasLotion = confirm("Do you have lotion?")
//
// 	if (isAshy && hasLotion) {
// 		alert("Don't forget to moisterize!")
// 	} else if (isAshy && !hasLotion) {
// 		alert("Go to the store and get some lotion!")
// 	} else if (!isAshy && hasLotion) {
// 		alert("Way to stay moisterized!")
// 	} else {
// 		alert("Well if you're not ashy, then you don't have a need for lotion.")
// 	}
// }
// moisterize();

////////////////////////////////////////////////

// if(false) {
// 	console.log("It is true")
// } else {
// 	console.log("It is false")
// }
//
// // rewriting as ternary
//
// (false) ? console.log("It is true") : console.log("It is false");


// function tvStatus() {
// 	var userFB = prompt("What is the LED on the television?")
// 	if (userFB === 'red') {
//
// 	}
// }
// tvStatus();

// LOOPS LECTURE

//
//~*~ While Loops ~*~
//

//are we there yet?
// var areWeThereYet;
//
// while(!areWeThereYet) {
// 	areWeThereYet = confirm("Are we there yet?");
// }


// In the above example, we'll continue to prompt the user asking if we're there yet until we finally get
// a positive confirmation. While the condition is not true (!areWeThereYet), do some stuff (from the body of the loop)

//var haveToy = confirm("Can I have the toy, please?!");

//Past modules: maybe use the var into an alert and show that we've capture that value.
// alert("Hey, it is " + haveToy + " that you can have that toy.")

//NOW: How can we use this variable + boolean inside with a while loop?
// while(!haveToy) {
// 	haveToy = confirm("PLEEEEEEEAAASSSEEEEE can I have the toy?")
// }
//
// if(haveToy) {
// 	alert("Thanks! You're the best!")
// }
// Notice that much like an if statement, our while loop will only run if the initial condition is met.
// If we give Codie the toy from the get go, we won't see the behavior in the loop at all.

// TODO: Quasar~ create a WHILE loop that runs as long as i is less than 10;



function countTo10() {
	var i = -1;
	while (i < 10) {
		i++;
		console.log(i);
	}
}

// console.log("Counting to 10....")
// countTo10();

function countFrom10() {
	var i = 11;
	while (i > 0) {
		i--;
		console.log(i);
	}
}

// console.log("Counting down from 10....")
// countFrom10();
//~*~ Do-While Loops ~*~


// A do/while loop is quite similar to a while loop. The biggest difference is that a do/while loop will run at least once
// [do this thing for sure this first time . . then check condition to continue VS. check condition . . will I do this thing at all?]

// do {
//  Code to be run.
// } while (condition)

// Consider:

// while (false) {
//     console.log("will you ever see me?");
// }
//
// do {
//     console.log("But what about me?");
// } while (false);

// Notice that even with a condition that has a boolean value of false, the do while loop will run one time be for stopping.
// do {
// 	var secret = prompt("What is the secret password?");
// } while ( secret !== "sesame");


// We can also use what we've learned above within the body of your functions:
// Multiply by two until greater than 100.
// function doWhiletimesTwo(num) {
// 	do{
// 		num *= 2;
// 		console.log(num);
// 	} while (num <= 100);
//
// }
//
// console.log("Multiplying times 2 using do while loop");
// doWhiletimesTwo(2);
//
// function whileTimesTwo(num) {
// 	while(num <= 100) {
// 		num *= 2;
// 		console.log(num);
// 	}
// }
//
// console.log("Multiplying times 2 using while loop");
// whileTimesTwo(2);

// For loops: Loops that are designed to run a given number of times. Think more math thinking.


// for (var incrementer = 1; incrementer <= 2; incrementer++) {
//     console.log("This loop has run " + incrementer + " time(s).");
// }

// The for loop has more to it as you can see. Let's break down the arguments:

// - incrementer initialization - Here we are declaring the variable for our incrementer, as well as its value.

// - condition - The loop will continue to run until this condition is no longer true.

// - incrementer change - what happens to the incrementer in once the loop has finished executing the code for a given iteration.

// Once again, we can use this in a function.
function sayHelloXtimes(num) {
	for (num; num >= 0; num--) {
		if (num % 5 === 0) {
			console.log("Howdy! Our current number is " + num);
		} else {
			console.log("Hello! Our current number is " + num)
		}
	}
}
sayHelloXtimes(18);
// And we can use this with conditionals!

// for (var i = 1; i < 25; i++){
//     if (i % 6 == 0) console.log("Codeup");
//     else if (i % 2 == 0) console.log("Code");
//     else if (i % 3 == 0) console.log("Up");
//     else console.log(i);
// }

// TODO: Quasar, how would we refactor the above back into a WHILE loop as we saw earlier?

// Below is a funky example that works, but will rely on moving between different data types.
// for (var i = "A"; i.length < 8; i = i + "A") {
//     console.log("This is a bit of a tricky way to run a for loop, but hey, it works...");
// }

// We can get a loop to stop using break;

// var x = 0;
//
// while (true) {
//     alert("This is the song that never ends. It just goes on and on my friends. Somebody started singing not knowing what it was, and now we'll all just keep on singing this because");
//     x++;
//     if (x === 5) {
//         alert("LambChop, cut it out!!")
//         break;
//     }
// }

// for (var j = 5; j < 100000; j += 5) {
//     if (j === 25) {
//         break;
//     }
//     console.log(j);
// }

// Notice that by having the break, we're able to get out of the loop that would otherwise run forever.

// we can also use continue to allow a loop to skip an iteration.

function allOddNumbersToX (x) {
	for (var i = 0; i <= x; i++) {
		if (i % 2 === 0) {
			continue;
		}
		console.log(i);
	}
	return x;
}

// allOddNumbersToX(17);
// allOddNumbersToX(18);

// The above function will only log the odd numbers until the argument passed.