// Main calculator functions

let num1 = 6;
let num2 = 3;
let selectedButton = '';
let displayValue = '';
let numberArray = [num1, num2];

const add = () => num1 + num2;

// console.log(`The result of ${num1} + ${num2} = ${add()}`)

const subtract = () => num1 - num2;

// console.log(`The result of ${num1} - ${num2} = ${subtract()}`)

const multiply = () => num1 * num2;

// console.log(`The result of ${num1} x ${num2} = ${multiply()}`)

const divide = () => num1 / num2;

// console.log(`The result of ${num1} / ${num2} = ${divide()}`)

function operate(num1, num2) {
    if (selectedButton === 'addition') {
        console.log('add selected')
        add();
        console.log(add())

    } else if (selectedButton === 'subtraction') {
        console.log('subtract selected')
        subtract();
        console.log(subtract())

    } else if (selectedButton === 'multiplication') {
        console.log('multiply selected')
        multiply();
        console.log(multiply())

    } else if (selectedButton === 'division') {
        console.log('divide selected')
        divide();
        console.log(divide())

    }
};

const operators = document.querySelectorAll('button.operator');
operators.forEach((button) => {
    button.addEventListener('click', () => {
        // console.log(button.id);
        selectedButton = button.id;
        operate();
    });
});

const numbers = document.querySelectorAll('button.number');
numbers.forEach((button) => {
    button.addEventListener('click', () => {
        // console.log(button.id);
        selectedNumber = Number(button.value);
        console.log(selectedNumber);
        // let x = document.getElementsByClassName('number').value;
        document.getElementById('input').value += selectedNumber;
    });
});


// console.log(operators)