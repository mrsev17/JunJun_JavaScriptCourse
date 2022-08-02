"use strict";

const arr1 = ["a","b","c","d"];
alert("" + arr1[0] + "+" + arr1[1] + ", " + arr1[2] + "+" + arr1[3]);


const arr2 = [2,5,3,9];
const result = ((arr2[0] * arr2[1]) + (arr2[2] * arr2[3]));
alert(result);


const arr3 = [[1,2,3],[4,5,6],[7,8,9]];
alert(arr3[1][0]);


const objectTask4 = {
    js: ["jQuery","Angular"],
    php: "hello",
    css: "world"
};
alert(objectTask4.js[0]);

//=======================

const multiplyEx = (quantity) => {
    const emptyArr = [];

    if (emptyArr.length < 1) emptyArr.push("x");
    const result = emptyArr.map(function(element) {
        for (let i = 1; i < quantity; i += 1) {
            emptyArr.push(emptyArr[0].repeat(i + 1));
        }
    });
    return emptyArr;
};