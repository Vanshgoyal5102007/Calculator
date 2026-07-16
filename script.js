const calc = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => Math.round(num1 / num2 * 10) / 10
};

let numOne = "";
let operator = "";
let numTwo = "";


const calcDisplay = document.querySelector(".calc-display");
const backspace = document.querySelector(".backspace-btn");
const numberButton = document.querySelectorAll(".number-btn");
const operationButton = document.querySelectorAll(".operator-btn");
const clearButton = document.querySelector(".clear-btn");

clearButton.addEventListener("click", () => {
    numOne = "";
    operator = "";
    numTwo = "";
    calcDisplay.textContent = "";
});

backspace.addEventListener("click", () => {
        calcDisplay.textContent = calcDisplay.textContent.slice(0,-1);
});

for(let button of numberButton){
    button.addEventListener("click", () => {
        calcDisplay.textContent += button.textContent;
    });
}

for(let button of operationButton){
    button.addEventListener("click", () => {})
};

function operate(numOne, operator, numTwo){
    if(operator === "+"){
        result = calc.add(numOne, numTwo);
    }
    else if(operator === "-"){
        result = calc.subtract(numOne, numTwo);
    }
    else if(operator === "*"){
        result = calc.multiply(numOne, numTwo);
    }
    else{
        result = calc.divide(numOne, numTwo);
    }
    return result;
}