"use strict";

const exponentiation = (first,second) => {
    const resultExponentiation = Math.pow(first,second);
    return alert("Result of exponentiation " + first + " and " + second + " is a " + resultExponentiation);
}

const multiplay = (first,second) => {
    const resultMultiplay = first * second;
    return alert("Result of multiplay " + first + " and " + second + " is a " + resultMultiplay);
}

const division = (first,second) => {
    const resultDivision = first / second;
    return alert("Result of division " + first + " and " + second + " is a " + resultDivision);
}

const modulo = (first,second) => {
    const resultModulo = first % second;
    return alert("Result of modulo " + first + " and " + second + " is a " + resultModulo);
}

const mainFunction = (callBack) => {
    const first = +prompt("Enter first number:");
    const second = +prompt("Enter second number:");
    callBack(first,second);
}

mainFunction(exponentiation);
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);