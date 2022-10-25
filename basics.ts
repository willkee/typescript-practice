/*
const b1 = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;



TypeScript adds TYPES to be more explicit.
Types are statically-typed in TypeScript (set during development).
JavaScript types are being dynamically-typed (resolved at runtime).

Core Types:

number: all numbers (integers, float, decimal)
string: all text values
boolean: true or false (no "truthy" or "falsy" values)



const add = (n1: number, n2: number) => n1 + n2;

const num1 = 5;
const num2 = 2.8;

const result = add(num1, num2);
console.log(result);

b1?.addEventListener("click", () =>
	console.log(add(+input1.value, +input2.value))
);

// const person = {
// 	name: "Will",
// 	age: 37,
// };

// In TypeScript, object types are written almost like objects
// There are key/TYPE pairs

// generic object type--we need to be more specific
// const person: object = {    // INCORRECT CODE
// 	name: "Will",
// 	age: 37,
// };

const person: {
	// key/types
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string]; // This marks a *** TUPLE ** type
	// Tuple: we want exactly 2 elements, first one should be a number, second a string
} = {
	// key/values
	name: "Will",
	age: 37,
	hobbies: ["Sports", "Hiking"],
	role: [2, "author"],
};

let favoriteActivities: string[];
// favoriteActivities = ['Lifting', 1]  // Will give an error unless you use any[] on line 57
favoriteActivities = ["Lifting"]; // OK

console.log(person.age); // OK
console.log(person.name); // OK
// console.log(person.nickname); // TypeScript tells us there is no nickname property

// Typical JavaScript for loop
// for (const hobby of person.hobbies) {
// 	console.log(hobby.toUpperCase())
// }

// TypeScript
for (const hobby of person.hobbies) {
	// TypeScript knows that hobbies is dealing with strings so this is OK.
	// 	console.log(hobby.toUpperCase())
	// 	console.log(hobby.map()) // will cause an error in development
}

// Working with Tuples (added with TypeScript)
// fixed length array, exactly 2 elements

// person.role = 10;  // Gives error
// person.role[1] = 10;  // Gives error - expecting string
// person.role = []; // empty array not allowed
person.role = [0, "admin"]; // OK
// person.role.push('admin') // TypeScript can't catch this error (this is something to be aware of)

// TypeScript allowed you to be more clear with the type of data you are working with.

// Enum keyword - also new in TypeScript
// automatically enumerated global constant identifiers
// enum { NEW, OLD }

// JS
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// const person = {
// 	name: "Will",
// 	age: 37,
// 	hobbies: ["Hiking", "Lifting"],
// 	// role: "ADMIN", // string identifiers have downside because you have to remember how it was entered
// 	role: ADMIN,
// };

enum Role {
	ADMIN = 5,
	READ_ONLY, // Will increment after an assigned value, so this would be 6
	AUTHOR, // would be 7
	// By default, admin = 0, read_only = 1, author = 2
}

const person2 = {
	name: "Will",
	age: 37,
	hobbies: ["Hiking", "Lifting"],
	role: Role.ADMIN, // Assigns labels to numbers
	// Role.ADMIN = 5
};

// The ANY type
// Doesn't tell TypeScript anything, you can store anything

let test: any; // can be anything
// let test2: any[];    // at least tells TS it is an array, can store anything in it

// all valid
test = true;
test = false;
test = "I am a string!";
test = 123;
test = [12, 23, "asd", "dfg"];

// Try to avoid the "any" type. It defeats the purpose of TypeScript.
*/

const add = (val1: number, val2: number) => val1 + val2;

console.log(add(1, 2));
// console.log(add("1", "2"));
// console.log(add("1", 2134234234));

const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
	stuff: boolean[];
} = {
	name: "Will",
	age: 37,
	hobbies: ["Sports", "Hiking"],
	role: [2, "author"],
	stuff: [true, false, true, false],
};

// let test: string;

// test = "sdfhsdfsdf";
// test = true
// test = false
// test = 123;
