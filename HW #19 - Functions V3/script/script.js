"use strict";
/*
    Дан массив с числами const arr = [1, 2, 3, -1, -2, -3];

    Необходимо написать функцию которая вернет новый массив
    содержащий только положиельные числа. Для этого:

    — Создаем функцию с произвольным именем

    — Функция принимает массив в качестве параметра

    — В теле функции создаем пустой массив (пример: const exampleArr = [])

    — Если массив переданный в параметр функции пустой, то возвращаем сообщение об этом

    — Перебираем циклом массив, который передан в качестве параметра (использовать цикл for)

    — В теле цикла проверям является ли текущий элемент положительным числом или отрицательным (if)

    — Если число положительное, то добавлем его в ранее созданный массив с помощь функции push (пример exampleArr.push(currentPositiveNumber))

    — После выполнения цикла проверям массив, который наполняли только положиельными значениями

    — Если он не пустой, то возвращаем этот массив

    — Если пустой, возвращаем null
*/

const positiveValue = (arrNumbers) => {

    const emptyArr = [];

    if (arrNumbers === undefined) {
        return alert("Function cannot be empty.");
    } else if (arrNumbers.length === 0) {
        return alert("Array is empty.");
    } else if (!(Array.isArray(arrNumbers))) {
        return alert(arrNumbers + " is not array.");
    }

    for (let i = 0; i < arrNumbers.length; i++) {
        if (arrNumbers[i] > 0) {
            emptyArr.push(arrNumbers[i]);
        }
    }

    if (emptyArr.length === 0) {
        return alert("Result is " + null);
    }
    return alert(emptyArr);

};