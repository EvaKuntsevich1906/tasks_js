// На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива


let arrapp3: number[] = [];

const n3:number = +prompt("Введте кол-во элементов массива");

for (let i: number = 0; i < n3; i++) {
    arrapp3.push(+prompt())
};

const countapp3:number = arrapp3.reduce((sum, el) => {
    return sum + el
});


console.log(countapp3);

