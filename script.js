const submitBtn = document.getElementById("submit");
function checkNumberOfDigits() {
	// Grab the number enterred
	let num = document.getElementById("number-cont").value;

	// Check the length of the number enterred
	if (num.length >= 4 && num.length <= 10) {
		return num;
	}
	// return false;
}

function autobiographical() {
	// save the output of checkNumberOfDigits in a variable
	let numba = checkNumberOfDigits();
	console.log(numba);

	// create variable to hold the number of times a digit appears
	let count = 0;

	//loop thru the elements in the number string
	for (let i = 0; i < numba.length; i++) {
		//loop again thru the elements in the numba string
		for (let j = 0; j < numba.length; j++) {
			// Check if the number at index j in the second loop is equal to the outer index
			if (numba[j] == i) {
				// if the digit in the first loop is equal to any other digit in the numba increment count
				count++;
			}
		}
		// Check if the digit at that index is not equal to the count variable
		// if true return false
		if (numba[i] != count) {
			console.log("Not autobiographical");
			return false;
		}
		// If false assign zero to the count and continue with the loop
		count = 0;
		console.log("autobiographical");
		return true;
	}
}
submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	autobiographical();
});
