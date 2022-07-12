// Main calculator functions

let num1 = undefined;
let num2 = undefined;
let selectedButton = undefined;
let displayValue = undefined;
let result = null;

const add = () => result = Number(num1) + Number(num2);

const subtract = () => result = Number(num1) - Number(num2);

const multiply = () => result = Number(num1) * Number(num2);

const divide = function() {
    if (num2 === 0) {
        result = 'MATH ERROR';
        return;
    }
    result = Number(num1) / Number(num2);
};


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
        document.getElementById('input').value = ''; // reset the display after an operator is chosen
        equals();
        numberAdjust();
        selectedButton = button.id;
        clear();
        console.log(displayValue)
    });
});

const numbers = document.querySelectorAll('button.number');
numbers.forEach((button) => {
    button.addEventListener('click', () => {
        // console.log(button.id);
        if (document.getElementById('input').value == Math.round(result * 100000) / 100000 ||
        document.getElementById('input').value == result) {
            document.getElementById('input').value = ''
        }
        selectedNumber = Number(button.value);
        // console.log(selectedNumber);
        // let x = document.getElementsByClassName('number').value;
        document.getElementById('input').value += selectedNumber;
        displayValue = Number(document.getElementById('input').value);
        // console.log(displayValue)
    });
});

function numberAdjust() {
    if (num1 === undefined) {
        num1 = displayValue;
    } else if (num2 === undefined) {
        num2 = displayValue;
        operate();
        displayResult();
        // document.getElementById('input').value = Math.round(result * 100000) / 100000;
    } else {
        if (result == 'MATH ERROR') {
            result = num1;
        }
        num1 = result;
        num2 = displayValue;
        operate();
        displayResult();
        // document.getElementById('input').value = Math.round(result * 100000) / 100000;
    }
};

function equals() {
    if (selectedButton === 'equals') {
        displayResult();
        // document.getElementById('input').value = result;
    }
};

function clear() {
    if (selectedButton === 'clear') {
        num1 = undefined;
        num2 = undefined;
        displayValue = undefined;
        result = null;
        document.getElementById('input').value = '';
    }
};

function displayResult() {
    if (result == 'MATH ERROR') {
        document.getElementById('input').value = result;
    } else {
        document.getElementById('input').value = Math.round(result * 100000) / 100000;
    }
};
// console.log(operators)