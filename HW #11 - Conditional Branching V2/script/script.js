"use strict";

// 1. Если переменная a равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

function aCheckOne(a) {
    const answer = a === 0 ? "Верно" : "Неверно";
    return answer;
}

// 2. Если переменная a больше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.

function aCheckTwo(a) {
    const answer = a > 0 ? "Верно" : "Неверно";
    return answer;
}

// 3. Если переменная a меньше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.

function aCheckThree(a) {
    const answer = a < 0 ? "Верно" : "Неверно";
    return answer;
}

// 4. Если переменная a больше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

function aCheckFour(a) {
    const answer = a >= 0 ? "Верно" : "Неверно";
    return answer;
}

// 5. Если переменная a меньше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

function aCheckFive(a) {
    const answer = a <= 0 ? "Верно" : "Неверно";
    return answer;
}

// 6. Если переменная a не равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

function aCheckSix(a) {
    const answer = a !== 0 ? "Верно" : "Неверно";
    return answer;
}

// 7. Если переменная a равна ‘test’, то выведите ‘Верно’, иначе выведите ‘Неверно’.

function aCheckSeven(a) {
    const answer = a === 'test' ? "Верно" : "Неверно";
    return answer;
}

// 8. Если переменная a равна ‘1’ и по значению и по типу, то выведите ‘Верно’, иначе выведите ‘Неверно’.

function aCheckEight(a) {
    const check = a;
    switch(true) {
        case (check == "1"):
            console.log("Верно");
            break;
        default:
            console.log("Неверно");
    }
}

// 9. Если переменная a больше нуля и меньше 5-ти, то выведите ‘Верно’, иначе выведите ‘Неверно’.

function aCheckNine(a) {
    const answer = ((a > 0) && (a < 5)) ? "Верно" : "Неверно";
    return answer;
}

// 10. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран.

function aCheckTen(a) {
    switch (true) {
        case ((a === 0) || (a === 2)):
            return a + 7;
            break;
        case ((a === 1) || (a > 2)):
            return a / 10;
            break;
    }
}

// 11. Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите
// сумму этих переменных, иначе выведите их разность (результат вычитания).

function aCheckEleven(a,b) {
    switch (true) {
        case ((a <= 1) && (b >= 3)):
            return a + b;
            break;
        default:
            return a - b;
    }
}

// 12. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти
// и меньше 14-ти, то выведите ‘Верно’, в противном случае выведите ‘Неверно’.

function aCheckTwelve(a,b) {
    switch (true) {
        case ((a > 2) && (a < 11)) || ((b >= 6) && (b < 14)):
            return "Верно";
            break;
        default:
            return "Неверно";
    }
}

// 13. Переменная num может принимать 4 значения: 1, 2, 3 или 4.
// Если она имеет значение ‘1’, то в переменную result запишем ‘зима’,
// если имеет значение ‘2’ – ‘весна’ и так далее. Решите задачу через switch-case.

function checkNum(num) {
    let result;
    switch (num) {
        case 1:
            result = "зима";
            return result;
            break;
        case 2:
            result = "весна";
            return result;
            break;
        case 3:
            result = "лето";
            return result;
            break;
        case 4:
            result = "осень";
            return result;
            break;
        default:
            return "You can select 1,2,3,4";
    }
}
