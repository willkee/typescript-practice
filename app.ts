// Union Types

/*

function combine(input1: number | string, input2: number | string) {
	// input1: number | string   -> is saying we can accept number OR string
	let result: number | string;
	if (typeof input1 === "number" && typeof input2 === "number") {
		result = input1 + input2;
	} else {
		// result = input1.toString() + " " + input2.toString();
		result = `${input1.toString()} ${input2.toString()}`;
	}
	return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

// const combinedNames = combine("Max", "Will");  will cause problems with number type only
const combinedNames = combine("Max", "Will");
console.log(combinedNames);

*/

// Literal Types
function combine(
	input1: number | string,
	input2: number | string,
	resultConversion: "as-number" | "as-text" // we allow only these 2 strings
) {
	// input1: number | string   -> is saying we can accept number OR string
	let result: number | string;
	if (
		(typeof input1 === "number" && typeof input2 === "number") ||
		resultConversion === "as-number"
	) {
		result = +input1 + +input2;
	} else {
		// result = input1.toString() + " " + input2.toString();
		result = `${input1.toString()} ${input2.toString()}`;
	}
	if (resultConversion === "as-number") {
		return +result;
	} else {
		return result.toString();
	}
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine(30, 26, "as-text");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Will", "as-text");
console.log(combinedNames);

// const combinedNamesError = combine("Max", "Will", "as-test"); // will be an error, because of the union and literal types
// console.log(combinedNamesError);
