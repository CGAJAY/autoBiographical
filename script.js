// If a number is autobiographical, then the number's digits describe itself.
// The first digit is the amount of times the digit 0 appears,
//  the second digit is the amount of times the digit 1 appears,
//  the third digit is the amount of times the digit 2 appears, etc.
//  This repeats for all digits of the number.
//  The number 6210001000 is autobiographical,
//  because it has six 0's, two 1's, one 2, zero 3's, zero 4's,
//  zero 5's, one 6, zero 7's, zero 8's, and zero 9's.

// Create a function that takes an integer n and returns whether or not n is an autobiographical number

// first function, create function checkNumberOfDigits
// check the number of digits in the number
// if the number of digits is >= 4 and <= 10 return that number
// if the number of digits is < 4 and > 10 return false

// second function,
// create a new variable  'newNumber' to save output of checkNumberOfDigits
// if the value of newNumber is not equals to false do the following
// Loop through the newNumber
// nest another loop
// in the nested loop check if the index is equal to the element at every index
// If true have a temporary container to register how many times this is true
// after the nested loop ends compare the value of the temporary container to the value of the newNumber
// at the current index in the outer loop
// if this is false terminate the loop
// if true continue with the loop
// Repeat the same steps until the we check for all the digits

let newNumber = "12101";
let count = 0;
let state = false;

for (let i = 0; i < newNumber.length; i++) {
	// for all the  elements loop to see if they are equal to the number of times their respective index appears
	for (let j = 0; j < newNumber.length; j++) {
		if (newNumber[j] == i) {
			count++;
		}
	}
	if (newNumber[i] == count) {
		count = 0;
		state = true;
		console.log(state);
	} else {
		state = false;
		console.log(state);
		return state;
	}
}
