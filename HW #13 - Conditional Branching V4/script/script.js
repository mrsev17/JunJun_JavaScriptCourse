"use strict";

/*
    1.Вам даны две переменные x и y, менять их не нужно. При помощи
    тернарного оператора сравните их и если x больше, чем y, то выведите
    фразу: «x больше, чем y», иначе выведите фразу: «x не больше, чем y».
*/

let x = 10, y = 7;

const result = x > y ? "x bigger then y" : "x not bigger then y";

/*
    2. Пользователь вводит какое-то число (num). Используя конструкцию
    if..else, напишите код, который делает запрос: «Введите число».Если
    посетитель вводит четное число, то выводить «»Число » + num + » четное»»,
    если нечетное: «Число » + num + » нечетное.
*/

const num = +prompt("Input number");
if ((num % 2) === 0) {
    alert("Number " + num + " even.");
} else {
    alert("Number " + num + " odd.");
}

/*
    3. Напишите код, который предлагает пользователю ввести целое число.
    Нужно вывести на экран сколько в этом числе цифр, а также положительное
    оно или отрицательное. Например, «Число » + num + » однозначное положительное».
    Достаточно будет определить, является ли число однозначным, двухзначным или трехзначным и более.

    Чтобы узнать длину строки которую ввел юзер в prompt нужно использовать

    let a = 'string';
    console.log(a.length)
*/

const inputData = prompt("Input integer number");
let numData = +inputData;

let posOrNeg = null;

if (numData > 0) {
    posOrNeg = " positive";
} else if (numData < 0) {
    posOrNeg = " negative";
}

/*if (numData < 0) {
    numData = numData.toString();
    numData = numData.substring(1);
}
*/

const lengthData = inputData.length;

numData = +numData;

switch (true) {
    case (lengthData === 1):
        alert("Number " + inputData + " have only one number. And also have" + posOrNeg + " value.");
        break;
    case (lengthData === 2):
        alert("Number " + inputData + " have only two numbers. And also have" + posOrNeg + " value.");
        break;
    case (lengthData === 3):
        alert("Number " + inputData + " have only three numbers. And also have" + posOrNeg + " value.");
        break;
    default:
        alert("Number " + inputData + " have more then three numbers. And also have" + posOrNeg + " value.");
}

/*
    4. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.
       Пользователь вводит поочерёдно через prompt числа. Используя конструкцию if..else, напишите код,
       который должен определять, какое из введенных чисел является наибольшим.
*/

const firstValue = +prompt("Input first value");
const secondValue = +prompt("Input second value");
const thirdValue = +prompt("Input third value");

if ((firstValue > secondValue) && (firstValue > thirdValue)) {
    alert("First value - " + firstValue + " bigger then second - " + secondValue + " and third - " + thirdValue + ".");
} else if ((secondValue > firstValue) && (secondValue > thirdValue)) {
    alert("Second value - " + secondValue + " bigger then first - " + firstValue + " and third - " + thirdValue + ".");
} else if ((thirdValue > firstValue) && (thirdValue > secondValue)) {
    alert("Third value - " + thirdValue + " bigger then first - " + firstValue + " and second - " + secondValue + ".");
} else {
    alert("All values are same");
}

/*
    5. У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две стороны просто <лягут> на третью
    и треугольника не получится.Пользователь вводит поочерёдно через prompt длины трех сторон. Используя конструкцию
    if..else, напишите код, который должен определять, может ли существовать треугольник при таких длинах. Т. е. нужно
    сравнить суммы двух любых строн с оставшейся третьей стороной. Чтобы треугольник существовал, сумма всегда должна
    быть больше отдельной стороны.
 */

const firstLength = +prompt("Input length first side");
const secondLength = +prompt("Input length second side");
const thirdLength = +prompt("Input length third side");

const sumOfOne = firstLength + secondLength;
const sumOfTwo = secondLength + thirdLength;
const sumOfThird = thirdLength + firstLength;

if ((firstLength === 0) || (secondLength === 0) || (thirdLength === 0)) {
    alert("We cannot build triangle if one of side is equal zero.");
} else if ((sumOfOne > thirdLength) || (sumOfTwo > firstLength) || (sumOfThird > secondLength)) {
    alert("We can build triangle");
} else {
    alert("We cannot build triangle");
}
