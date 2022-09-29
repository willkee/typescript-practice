var b1 = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
/*

TypeScript adds TYPES to be more explicit.
Types are statically-typed in TypeScript (set during development).
JavaScript types are being dynamically-typed (resolved at runtime).

Core Types:

number: all numbers (integers, float, decimal)
string: all text values
boolean: true or false (no "truthy" or "falsy" values)

*/
var add = function (n1, n2) { return n1 + n2; };
var num1 = 5;
var num2 = 2.8;
var result = add(num1, num2);
console.log(result);
b1 === null || b1 === void 0 ? void 0 : b1.addEventListener("click", function () {
    return console.log(add(+input1.value, +input2.value));
});
// const person = {
// 	name: "Will",
// 	age: 37,
// };
// In TypeScript, object types are written almost like objects
// There are key/TYPE pairs
// generic object type--we need to be more specific
// const person: object = {
// 	name: "Will",
// 	age: 37,
// };
var person = {
    // key/values
    name: "Will",
    age: 37
};
console.log(person.age); // OK
console.log(person.name); // OK
// console.log(person.nickname); // TypeScript tells us there is no nickname property
