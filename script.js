//There is a glitch that is apperently operating with
// the selected sign with 0 as soon as we click the operate button on a number 
// that we received by clicking the equal button
//Try 2*3 = 6 -> any operate button
//It should be an issue of +calcDisplay.textContent where +"" becomes 0.

const calc = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => Math.round(num1 / num2 * 10) / 10
};

let numOne = "";
let operator = "";
let numTwo = "";

let resultLogged = false;
let equalFlag = false;

const calcDisplay = document.querySelector(".calc-display");
const backspace = document.querySelector(".backspace-btn");
const numberButton = document.querySelectorAll(".number-btn");
const operationButton = document.querySelectorAll(".operator-btn");
const clearButton = document.querySelector(".clear-btn");
const equalButton = document.querySelector(".equal-btn");

clearButton.addEventListener("click", () => {
    numOne = "";
    operator = "";
    numTwo = "";
    calcDisplay.textContent = "";
    console.clear();
});

backspace.addEventListener("click", () => {
        calcDisplay.textContent = calcDisplay.textContent.slice(0,-1);
});

for(let button of numberButton){
    button.addEventListener("click", () => {
        calcDisplay.textContent += button.textContent;
        if(resultLogged){
            resultLogged = false;
            calcDisplay.textContent = button.textContent;
        }
    });
}

for(let button of operationButton){
    button.addEventListener("click", () => {
        if(!operator){
            operator = button.textContent;
        };
        if(!numOne){
            numOne = +calcDisplay.textContent;
            operator = button.textContent;
            calcDisplay.textContent = "";
        }
        else if(!numTwo){
            if(equalFlag){
                calcDisplay.textContent = "";
                equalFlag = false;
                return;
            }
            numTwo = +calcDisplay.textContent;
            let result = operate(numOne, operator, numTwo);
            calcDisplay.textContent = `${result}`;
            numOne = result;
            resultLogged = true;
            numTwo = "";
            operator = button.textContent;
        }
    })
};

equalButton.addEventListener("click", () => {
    if(numOne && operator && !numTwo){
        numTwo = +calcDisplay.textContent;
        let result = operate(numOne, operator, numTwo);
        calcDisplay.textContent = `${result}`;
        numOne = result;
        resultLogged = true;
        numTwo = "";
        operator = "";
        equalFlag = true;
        console.log(numOne, operator, numTwo, "=", result);
    }
})

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