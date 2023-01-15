// . Напишите функцию, которая принимает массив чисел 
// и находит минимальное и
// максимальное числа соответственно.
//  Добавить проверки на ввод и если значения
// массива не соответствуют условию задания,
//  вывести сообщение об ошибке.

const arr = [3, 4, 5, 6, 7, 8, 12, 15, 28];

const valid = (array) => {
    let counter = 0;
    array.forEach(el => (isNaN(el) ? counter++ : null))
    return counter > 0  ? false : true;
}

const doArray = (array) => {
    const res = valid(arr)
    if (res) {   
        let maxVal = array[0];
        let minVal = array[0];

    array.forEach(el => {
        (el > maxVal) ? maxVal = el: null;
        (el < minVal) ? minVal = el: null
    })
    return `min Value is ${minVal}, maxValue is ${maxVal}`
} else {
    return false;
}
}

console.log(doArray(arr));