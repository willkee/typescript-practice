const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

/*

TypeScript adds TYPES to be more explicit.
Types are statically-typed in TypeScript (set during development).
JavaScript types are being dynamically-typed (resolved at runtime).

Core Types:

number: all numbers (integers, float, decimal)
string: all text values
boolean: true or false (no "truthy" or "falsy" values)

*/

const add = (n1: number, n2: number) => n1 + n2;

const num1 = 5;
const num2 = 2.8;

const result = add(num1, num2);
console.log(result);

button?.addEventListener("click", () =>
	console.log(add(+input1.value, +input2.value))
);

const person = {
	name: "Will",
	age: 37,
};

console.log(person.age); // OK
console.log(person.name); // OK
console.log(person.nickname); // TypeScript tells us there is no nickname property
