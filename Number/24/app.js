//При работе с данной задачей необходимо ознакомиться с Math.random().
// Пользователь вводит число n. Данное число – количество элементов массива. 
// Создайте массив рандомных чисел, состоящий из n-кол-ва. Найдите наименьшее 
// и наибольшее число.

let value = +prompt();
let arr = [];

for (let i = 0; i < value; i++) {
    let num = Math.floor(Math.random() * 100);
    arr.push(num)
}

let maxValue = Math.max(...arr);
let minValue = Math.min(...arr);

alert(arr);
alert(`Максимальное число в массиве это ${maxValue}`)
alert(`Минимальное число в массиве это ${minValue}`)
