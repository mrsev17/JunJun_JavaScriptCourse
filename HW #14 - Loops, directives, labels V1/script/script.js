"use strict";

// 1.  Выведите в консоль с помощью цикла столбец чисел от 1 до 100.

for (let i = 1; i < 101; i+=1) {
    console.log(i);
}

// 2. Выведите в консоль с помощью цикла столбец чисел от 100 до 1

for (let i = 100; i > 0; i-=1) {
    console.log(i);
}

// 3. Выведите с помощью цикла столбец четных чисел от 1 до 100.

for (let i = 1; i < 101; i+=1) {
    if (0 === (i % 2)) {
        console.log(i);
    }
}

// 4. Дан массив с числами. С помощью цикла найдите сумму элементов
//    этого массива выведите ее в консоль.
//
// const arr = [1, 2, 3, 4, 5];

const arr = [1, 2, 3, 4, 5];
let finalValue = 0;

for (let i = 0; i < arr.length; i+=1) {
    finalValue += arr[i];
}
console.log(finalValue);

// 5. Дан массив с числами. С помощью цикла найдите сумму
//    квадратов элементов этого массива.
//
// const arr = [1, 2, 3, 4, 5];

const arrTwo = [1, 2, 3, 4, 5];
let finalValueTwo = 0;

for (let i = 0; i < arrTwo.length; i+=1) {

    finalValueTwo += Math.pow(arrTwo[i],2);

}
console.log(finalValueTwo);