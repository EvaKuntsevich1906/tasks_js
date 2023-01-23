// Напишите функцию которая принимает массив чисел и возвращает
// произведение всех элементов массива

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//declaration
function checkNum(arr_) {
    let counter = 1;
    for (let i = 0; i < arr_.length; i++) {
        (!isNaN(arr_[i])) ? counter *= arr_[i]: null;
    }
    return counter
}
console.log(checkNum(arr));