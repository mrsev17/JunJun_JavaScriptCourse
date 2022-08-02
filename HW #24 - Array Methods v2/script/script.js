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



const emptyArr = [];
if (emptyArr.length < 1) emptyArr.push("x");
const result = emptyArr.map(function(element) {
    for (let i = 1; i < 10; i += 1) {
        emptyArr.push(emptyArr[0].repeat(i + 1));
    }
});
console.log(emptyArr);



const emptyArr = [];
if (emptyArr.length < 1) emptyArr.push("1");
const result = emptyArr.map(function(element) {
    for (let i = 2; i <= 10; i += 1) {
        emptyArr.push((i+"").repeat(i));
    }
});
console.log(emptyArr);



const arrayFillClone = (letter,count) => {
    const finalArr = [];
    if (finalArr.length < 1) finalArr.push(letter);
    const updateArr = finalArr.map(function(element) {
        for (let i = 1; i < count; i += 1) {
            finalArr.push(finalArr[0]);
        }
    })
    return finalArr;
}



let testArr = [3,3,3,3,7];
let counter = 0;
let result = 0;
const maxPoint = 10;
const workMethod = testArr.map(function() {
    for (let i = 0; i <= testArr.length; i += 1) {
        if (result < maxPoint) {
            result += testArr[i];
            counter += 1;
        } else if (result > maxPoint) {
            counter += 0;
        }
    }
})
console.log(counter);



const cloneReverse = someArr => {
    let resultArr = [];
    for (let i = 0; i < someArr.length; i += 1) {
        resultArr.unshift(someArr[i]);
    }
    return resultArr;
}



const workArr = [[1, 2, 3], [4, 5], [6]];
const togetherArr = workArr.reduce((total,amount) => {
    return total.concat(amount);
},[]);
const summaryAll = togetherArr.reduce((total,amount) => {
    return total + amount;
});



const workArr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const togetherArr = workArr.reduce((total,amount) => {
    return total.concat(amount);
},[]);
const togetherArrSec = togetherArr.reduce((total,amount) => {
    return total.concat(amount);
},[]);
const summaryAll = togetherArrSec.reduce((total,amount) => {
    return total + amount;
});