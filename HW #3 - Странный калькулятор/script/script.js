const valueCalcOne = prompt("Input first value"); // Take value from user
const valueCalcTwo = prompt("Input second value");

const calcOneToNum = Number(valueCalcOne); // Change type of result from prompt, cause its return string
const calcTwoToNum = Number(valueCalcTwo);

function plusValue() {      // Make function for each operation with math operators plus, minus, divide, multiply
    const resultPlus = calcOneToNum + calcTwoToNum;
    console.log(resultPlus);
}
function minusValue() {
    const resultMinus = calcOneToNum - calcTwoToNum;
    console.log(resultMinus);
}
function multiplyValue() {
    const resultMultiply = calcOneToNum * calcTwoToNum;
    console.log(resultMultiply);
}
function divideValue() {
    const resultDivide = calcOneToNum / calcTwoToNum;
    console.log(resultDivide);
}


const finalVarPlus = plusValue(); // Make variable for final results of functions
const finalVarMinus = minusValue();
const finalVarMultiply = multiplyValue();
const finalVarDivide = divideValue();