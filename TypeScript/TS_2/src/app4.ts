// Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.

let arrapp4: string[] = [];

const n4: number = +prompt("Введте кол-во элементов массива");


for (let i: number = 0; i < n4; i++) {
    arrapp4.push(prompt("Введите слова"));
};

const resultapp4: boolean = arrapp4.some(el => el.length > 5? true : false);

console.log(resultapp4);
