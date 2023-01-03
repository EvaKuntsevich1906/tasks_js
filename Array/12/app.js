// Пользователь вводит число, являющееся количеством элементов массива. Далее вводит сами элементы. Необходимо найти максимальное число

let size = +prompt();
let arr = [];
for (let i = 0; i < size; i++) {
    arr.push(+prompt())
}
let maxval = arr[0] // 1 элемент массива
for (let i = 0; i < arr.length; i++) {
    if (maxval < arr[i]) {
        maxval = arr[i]
    }
}
alert(`Максимальное число из массива это ${maxval}`)