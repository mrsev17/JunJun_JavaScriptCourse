"use strict";
/*
    Вам нужно написать реализацию функции padString, которая принимает 4 аргумента:

    1. строку

    2. число, которое является длинной строки, которую мы хотим получить в результате выполнения функции

    3. символ (строка длинной 1 символ) — которым дополнится строка, если это будет необходимо

    4. параметр булеан (true или false), который определяет, добавлять символы слева или справа (по умолчанию справа)

    Обязательно при написании функции необходимо проверить аргументы, которые мы передали,
    и если каких-то аргументов нет, то вернуть из функции строку с ошибкой (return ‘some error’).
    Сообщение с ошибкой должно быть разное в зависимости от того условия, по которому не прошла проверка.

    Результат вызова функции нужно вывести в консоль — после завершения функции.

    Например:

    Вызов padString(‘hello’, 8, ‘*’) вернет строку hello***

    А вызов padString(‘hello’, 6, ‘*’, false) вернет строку *hello

    Вызов padString(‘hello’, 2) вернет ‘he’ — если число меньше, чем
    размер введенной строки, нужно строку обрезать при помощи метода subst
*/

const padString = (str,leng,symb = "",side = false) => {

    if (typeof str !== "string") {
        return "Error: First data must be a string";
    } else if (typeof leng !== "number") {
        return "Error: Second data must be a number";
    }

    let switchSide;
    if (side === true) {
        switchSide = 1;
    } else if (side === false) {
        switchSide = 0;
    } else if (side === "undefined") {
        switchSide = 0;
    } else if (side === String(side)) {
        return "Error: Fourth data must be true or false"
    }

    const mainTarget = () => {
        if ((leng >= str.length) && (switchSide === 0) && (symb.length === 1)) {
            let plsStr;
            let symbRep = symb.repeat(leng);
            plsStr = str + symbRep;
            return plsStr;
        } else if (leng < str.length) {
            return str.substr(str[length],leng);
        } else if ((leng >= str.length) && (switchSide === 1) && (symb.length === 1)) {
            let leftStr;
            let symbRepeat = symb.repeat(leng);
            leftStr = symbRepeat + str;
            return leftStr;
        }
    };

    return mainTarget();

};