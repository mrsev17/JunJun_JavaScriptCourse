/*
    Запрашиваем число у пользователя
    Нужно найти минимальный делитель переданного числа.
    Для этого достаточно последовательно проверять делимость,
    начиная с двойки. Если делитель не найден, значит число
    простое, и делителем является само число.

    Если переданное число меньше единицы, то вывести в консоль NaN.
    иначе вывести наименьший делитель числа
*/

function smallestDivider() {

    const number = +prompt("Input number");

    if (number < 1) {
        console.log(NaN);
    } else if (number % 2 === 0) {
        console.log(2);
    } else {
        let squareRoot = Math.sqrt(number);

        let startPoint = 3;

        while ((number % startPoint !== 0) && (startPoint < squareRoot)) {
            startPoint = startPoint + 2;
        }

        if (number % startPoint === 0) {
            console.log(number);
        } else {
            console.log(number);
        }

    }
}

window.onload = function() {
    smallestDivider();
};