// 5. а вход подается число n – количество элементов массива. Необходимо
// заполнить массив случайными элементами. Если значение массива находится в
// диапазоне 10<n< 100, то занести в новый массив. Добавить проверки и обработать
// их. Обратите внимание, тут как минимум 3 функции. Первая: формирование
// массива. Вторая: валидация. Третья: основная логика задачи


let n = +prompt("Введите количество элементов массива");

function createArray(n_) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt("Введите значение"))
    }
    return arr
}

function findValidElem(arr_) {
    try {
        return arr_.filter((el) => 10 && el < 100);
    } catch (err) {
        return err.message
    }
}

const array = createArray(n)
let result = findValidElem(arr)
console.log((result));
console.log((array));