// Main calculator functions

let num1 = 6;
let num2 = 3;

const add = function() {
	return num1 + num2;
};

console.log(`The result of ${num1} + ${num2} = ${add()}`)

const subtract = function() {
	return num1 - num2;
};

console.log(`The result of ${num1} - ${num2} = ${subtract()}`)

const multiply = function() {
    return num1 * num2;
};

console.log(`The result of ${num1} x ${num2} = ${multiply()}`)

const divide = function() {
    return num1 / num2;
};

console.log(`The result of ${num1} / ${num2} = ${divide()}`)
