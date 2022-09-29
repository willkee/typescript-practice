var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
// TypeScript adds TYPES to be more explicit
/*

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
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    return console.log(add(+input1.value, +input2.value));
});
