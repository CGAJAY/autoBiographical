const submitBtn = document.getElementById("submit");
const container = document.querySelector(".container");
const inputNum = document.getElementById("number-cont");
// Create a result container
const resultCont = document.createElement("div");
resultCont.setAttribute("id", "result-cont");
// Create a h2 to hold the results
const result = document.createElement("h2");
result.setAttribute("id", "result");

function checkNumberOfDigits() {
	// Grab the number enterred
	let num = document.getElementById("number-cont").value;

	// Check the length of the number enterred
	if (num.length >= 4 && num.length <= 10) {
		return num;
	}
	return false;
}

// create variable to hold the number of times a digit appears
let count = 0;
let num = 0;
function autobiographical() {
	// save the output of checkNumberOfDigits in a variable
	let numba = checkNumberOfDigits();
	inputNum.value = "";

	// Check if value of numba is  false
	if (numba === false) {
		// if false return -1
		return -1;
	}
	console.log(numba);

	//loop thru the elements in the number string
	for (let i = 0; i < numba.length; i++) {
		// Check if digit at index i is equal to num variable
		if (numba[i] == num) {
			count++;
		}
	}
	// Check if the digit at that index is not equal to the count variable
	// if true return false
	if (numba[num] != count) {
		console.log("Not autobiographical");
		// If false return false
		return false;
	}

	num++;
	count = 0;
	autobiographical();
	return true;
}

function render() {
	result.textContent = "";
	// save the return value of autobiographical() in a variable
	let mainOutput = autobiographical();

	// have a condition to render different output respective to value in mainOutput
	if (mainOutput === -1) {
		result.textContent =
			"Number should have 4 digits minimum and 10 digits maximum";
	} else if (mainOutput === false) {
		result.textContent = "Number is not autobiographical";
	} else {
		result.textContent = "Number is autobiographical";
	}
	// Append result to the result container
	resultCont.appendChild(result);
	// Append result container to the main container
	container.appendChild(resultCont);
}

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	render();
});
