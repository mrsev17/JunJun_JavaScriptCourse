function strangeCalculator() {

    const selectOptionMath = prompt("Enter one of option for math operation. Option: add, sub, mult, div");

    const valueCalcOne = prompt("Input first value");
    const valueCalcTwo = prompt("Input second value");

    const calcOneToNum = Number(valueCalcOne);
    const calcTwoToNum = Number(valueCalcTwo);

    if (selectOptionMath === "add") {
        const resultPlus = calcOneToNum + calcTwoToNum;
        alert(resultPlus);
    } else if (selectOptionMath === "sub") {
        const resultMinus = calcOneToNum - calcTwoToNum;
        alert(resultMinus);
    } else if (selectOptionMath === "mult") {
        const resultMultiply = calcOneToNum * calcTwoToNum;
        alert(resultMultiply);
    } else if (selectOptionMath === "div") {
        const resultDivide = calcOneToNum / calcTwoToNum;
        alert(resultDivide);
    } else {
        alert("Wrong value! Refresh page");
    }
}

console.log(strangeCalculator());