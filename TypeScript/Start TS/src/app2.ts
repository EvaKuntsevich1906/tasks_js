// 2. Создайте переменные num1 и num2 и присвойте им два различных числовых
// значения. Выведите в консоль большее из двух чисел.

let num2:number = +prompt("Введите первое число");
let num3:number = +prompt("Введите второе число");

if (num2>num3) {
    console.log(`Наибольшее число ${num2}`);
} else {
    console.log(`Наибольшее число ${num3}`);
}

