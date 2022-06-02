const calcAddition = (firstNumber, secondNumber) => firstNumber + secondNumber;
const calcSubtraction = (firstNumber, secondNumber) => firstNumber - secondNumber;
const calcMultiplication = (firstNumber, secondNumber) => firstNumber * secondNumber;
const calcDivision = (firstNumber, secondNumber) => firstNumber / secondNumber;

function showMessage() {
    const firstNumber = Number(prompt('Enter first number'));
    const operation = prompt('Enter operation');
    const secondNumber = Number(prompt('Enter second number'));

    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
        alert('Incorrect number');
    } else if (operation === '+') {
        alert (`Your result: ${calcAddition(firstNumber, secondNumber)}`);
    } else if (operation === '-') {
        alert(`Your result: ${calcSubtraction(firstNumber, secondNumber)}`);
    } else if (operation === '*') {
        alert (`Your result: ${calcMultiplication(firstNumber, secondNumber)}`);
    } else if (operation === '/') {
        alert (`Your result: ${calcDivision(firstNumber, secondNumber)}`);
    } else {
        alert('Incorrect operation');
    }
}

showMessage();

