// Пользователь вводит 2 числа от 0 до 10. Сложите переменные так, чтобы в
// результате получилось выражение: “I’m хх". Проверки на ввод только чисел. 
let x1 = +prompt(`Введите первое число`);
let x2 = +prompt(`Введите второе число`);

if(x1 <= 10 &&  x2<=9) {
console.log(`I'm ${x1}${x2}`);
} else console.log(`Некорректный ввод`)