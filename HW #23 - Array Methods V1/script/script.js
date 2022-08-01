"use strict";

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const resultTask1 = arr1.concat(arr2);
console.log(resultArr1);


const arr3 = [1,2,3];
const resultTask2 = arr3.reverse();
console.log(resultArr2);


const arr4 = [1,2,3];
const resultTask3 = arr4.push(4,5,6);
console.log(arr4);


const arr5 = [1,2,3];
const resultTask4 = arr5.unshift(4,5,6);
console.log(arr5);


const arr6 = ["js","css","jq"];
alert(arr6[0]);


const arrSeven = ["js","css","jq"];
alert(arr[2]);


const arr7 = [1,2,3,4,5];
const resultTask7 = arr7.splice(0,3);
console.log(resultTask7);


const arr8 = [1,2,3,4,5];
const resultTask8 = arr8.splice(3,4);
console.log(resultTask8);


const arr9 = [1,2,3,4,5];
const resultTask9 = arr9.splice(1,2);
console.log(arr9);


const arr10 = [1,2,3,4,5];
const resultTask10 = arr10.slice(1,4);
console.log(resultTask10);


const arr11 = [1,2,3,4,5];
const resultTask11 = arr11.splice(3,0,"a","b","c");
console.log(arr11);


const arr12 = [1,2,3,4,5];
const firstStep = arr12.splice(1,0,"a","b");
const secondStep = arr12.splice(6,0,"c");
const thirdStep = arr12.splice(8,0,"e");
console.log(arr12);


const arr13 = [3,4,1,2,7];
console.log(arr13.sort());


const arr14 = [5,6,7,8,9];
const resultTask14 = arr14.reduce((a,b) => a + b);
console.log(resultTask14);


const arr15 = [5,6,7,8,9];
const resultTask15 = arr14.map(arr14 => {
    return Math.pow(arr14,2);
})
console.log(resultTask15);


const arr16 = [1,-3,5,6,-7,8,9,-11];
const resultTask16 = arr16.filter(arr16 => {
    if (arr16 > 0) return arr16;
});
console.log(resultTask16);


const arr17 = [1,-3,5,6,-7,8,9,-11];
const resultTask17 = arr17.filter(arr17 => {
    if ((arr17 % 2) === 0) return arr17;
});
console.log(resultTask17);


const arr18 = ["aaa","aaaqqq","zzzqq","zz","qsaa","q","az"];
const resultTask18 = arr18.filter(function(word) {
    return word.length > 5;
})
console.log(resultTask18);


const arr19 = [1,2,[3,4],5,[6,7]];
const resultTask19 = arr19.filter(function(element) {
    if (Array.isArray(element)) return element;
});
console.log(resultTask19);


const arr20 = [5,-3,6,-5,0,-7,8,9];
let countNeg = 0;
const resultTask20 = arr20.filter(function(element) {
    if (element < 0) countNeg += 1;
});
console.log(countNeg);







