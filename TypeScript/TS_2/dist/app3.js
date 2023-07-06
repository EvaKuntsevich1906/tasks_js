// На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива
let arrapp3 = [];
const n3 = +prompt("Введте кол-во элементов массива");
for (let i = 0; i < n3; i++) {
    arrapp3.push(+prompt());
}
;
const countapp3 = arrapp3.reduce((sum, el) => {
    return sum + el;
});
console.log(countapp3);
