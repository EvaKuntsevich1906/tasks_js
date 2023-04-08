// Напишите функцию, которая принимает массив чисел и возвращает новый
// массив, состоящий из четных чисел. Добавьте функцию проверки

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//declaration
function checkNum(arr_) {
    arr_ = arr_.filter(el => el % 2 === 0)
    return arr_
}
console.log(checkNum(arr));