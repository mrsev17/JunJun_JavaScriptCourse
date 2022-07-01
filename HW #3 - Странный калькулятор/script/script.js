"use strict";

const valueCalcOne = prompt("Input first value");
const valueCalcTwo = prompt("Input second value");

const calcOneToNum = Number(valueCalcOne);
const calcTwoToNum = Number(valueCalcTwo);

function plusValue() {
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


const finalVarPlus = plusValue();
const finalVarMinus = minusValue();
const finalVarMultiply = multiplyValue();
const finalVarDivide = divideValue();