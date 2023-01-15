// На входе n – количество элементов массива. 
// Далее производится заполнение
// массива с клавиатуры. Напишите функцию,
//  которая принимает массив строк и
// находим там наибольшее по длине текстовое
//  значение. Добавить проверки

let n = prompt("Введите количество эл-тов массива");


let arr = [];

function doArray(size) {
    for (let i = 0; i < size; i++) {
        const element = prompt();
        arr.push(element)
    }
    return arr
}

function checkArray_main(array) {
    let maxValue = 0;
    console.log(array);
    array.forEach(element => {
        if (element.length > maxValue) {
            maxValue = element.length
        }
    });
    return maxValue;
}

let res = doArray(n)
let check = checkArray_main(arr)
console.log(check);