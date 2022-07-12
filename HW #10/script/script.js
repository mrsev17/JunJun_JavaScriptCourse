"use strict";

const numOrStr = prompt("input number or string");

switch (true) {
    case numOrStr === null:
        console.log("вы отменили");
        break;
    case numOrStr.trim() === "":
        console.log("Empty String");
        break;
    case isNaN( +numOrStr ):
        console.log(" number is Ba_NaN");
        break;
    default:
        console.log("Ok");
}