"use strict";

/*
    Вы готовите борщ и вам необходимо посчитать сколько килограмм нужно купить картошки.

    На 1 литр борща необходимо 4 картошки, средний вес одной картошки составляет 75 грамм.

    Сколько килограмм картошки необходимо купить для приготовления 48 литров борща ?

    Вес одной картошки (гр.) = 75
    Количество литров борща (л.) = 48

    Используйте информацию о весе для того чтобы посчитать стоимость картошки
    в магазине, если после просчета веса у вас получилось float число, то
    округлите его в большую сторону и приведите к целому числу.

    Цена 1кг картошки( грн )  = 13

    Вам необходимо написать функцию которая будет проводить
    расчеты стоимости покупки нужного количества картошки.
*/

const liters = +prompt("Input quantity which should be prepared:");

const calcBorsch = (liters) => {

    if (isNaN(liters))
        return alert("This app work only with numbers, try again.");

    const quantForLtr = 0.075 * 4;
    const quantForAll = Math.ceil(quantForLtr * liters);
    const priceForPot = quantForAll * 13;

    return alert(
        "For that quantity you need " + quantForAll +
        "kg potatoes.\n" + " And it's cost " + priceForPot + "UAH");
    };

calcBorsch(liters);