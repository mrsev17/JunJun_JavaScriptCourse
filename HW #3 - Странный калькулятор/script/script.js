const valueCalcOne = prompt("Input first value"); // Take value from user
const valueCalcTwo = prompt("Input second value");

const calcOneToNum = Number(valueCalcOne); // Change type of result from prompt, cause its return string
const calcTwoToNum = Number(valueCalcTwo);

function plusValue() {      // Make function for each operation with math operators plus, minus, divide, multiply
    let resultPlus = calcOneToNum + calcTwoToNum;
    console.log(resultPlus);
}
function minusValue() {
    let resultMinus = calcOneToNum - calcTwoToNum;
    console.log(resultMinus);
}
function multiplyValue() {
    let resultMultiply = calcOneToNum * calcTwoToNum;
    console.log(resultMultiply);
}
function divideValue() {
    let resultDivide = calcOneToNum / calcTwoToNum;
    console.log(resultDivide);
}


let finalVarPlus = plusValue(); // Make variable for final results of functions
let finalVarMinus = minusValue();
let finalVarMultiply = multiplyValue();
let finalVarDivide = divideValue();