// На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива
let arrapp3 = [];
const n = +prompt();
for (let i = 0; i < n; i++) {
    arrapp3.push(+prompt("Введте кол-во элементов массива"));
}
'';
const countapp3 = arrapp3.reduce((sum, el) => {
    return sum + el;
});
console.log(countapp3);
