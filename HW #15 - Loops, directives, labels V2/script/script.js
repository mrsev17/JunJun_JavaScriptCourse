"use strict";

/*
    Запросить у пользователя число, если число
    является простым то выводим в консоль true
    иначе false

    Простое число — целое положительное число,
    имеющее ровно два различных натуральных
    делителя — единицу и самого себя. Например,
    7 — простое число, потому что делится без
    остатка только на 1 и на себя. 2017 — другое
    простое число.

    Используйте цикл for .

    Примеры:

    1; // false
    7; // true
    10; // false
*/


const number = +(prompt("Enter number: "));
let isPrime = true;

if (number <= 1) {
    console.log(false);
}

else if (number > 1) {

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(true);
    } else {
        console.log(false);
    }

}

