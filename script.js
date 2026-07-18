const calc = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => Math.round(num1 / num2 * 1000000) / 1000000
};

function equal(){
        numTwo = +calcDisplay.textContent;
        let result = operate(numOne, operator, numTwo);
        calcDisplay.textContent = `${result}`;
        numOne = result;
        resultLogged = true;
        numTwo = "";
}

let numOne = "";
let operator = "";
let numTwo = "";

let resultLogged = false;
let equalFlag = false;

const calcContainer = document.querySelector(".calc-container");
const signDisplay = document.querySelector(".sign-display");
const calcDisplay = document.querySelector(".calc-display");
const backspace = document.querySelector(".backspace-btn");
const numberButton = document.querySelectorAll(".number-btn");
const operationButton = document.querySelectorAll(".operator-btn");
const clearButton = document.querySelector(".clear-btn");
const equalButton = document.querySelector(".equal-btn");
const noobAlert = document.querySelector(".noob-alert");

clearButton.addEventListener("click", () => {
    numOne = "";
    operator = "";
    numTwo = "";
    signDisplay.textContent = "";
    calcDisplay.textContent = "";
    noobAlert.textContent = "";
    console.clear();
});

backspace.addEventListener("click", () => {
        calcDisplay.textContent = calcDisplay.textContent.slice(0,-1);
        numOne = calcDisplay.textContent;
});

for(let button of numberButton){
    button.addEventListener("click", () => {
        noobAlert.textContent = "";
        if(calcDisplay.textContent.at(0) === "0" && !calcDisplay.textContent.at(1) == "."){
            calcDisplay.textContent = calcDisplay.textContent.slice(1,calcDisplay.textContent.length)
        }
        else if(calcDisplay.textContent.at(0) === "0" && !calcDisplay.textContent.at(1) == "." && button.textContent === "0"){
            calcDisplay.textContent += "";
        }
        else if(operator === "/" && !calcDisplay.textContent && button.textContent === "0"){
            calcDisplay.textContent += "";
            noobAlert.textContent = "Cmon dude, even a kid knows you can't divide something by 0";
        }
        else if(resultLogged){
            resultLogged = false;
            calcDisplay.textContent = button.textContent;
        }
        else{
            calcDisplay.textContent += button.textContent;
        }
    });
}

for(let button of operationButton){
    button.addEventListener("click", () => {
        signDisplay.textContent = button.textContent;
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
            equal();
            operator = button.textContent;
        }
    })
};

equalButton.addEventListener("click", () => {
    if(operator && !numTwo && !calcDisplay.textContent == ""){
        equal();
        operator = "";
        equalFlag = true;
        signDisplay.textContent = "";
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