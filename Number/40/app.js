// Напишите программу, в которой вычисляется сумма, разность и 
// произведение двух целых чисел, введенных с клавиатуры.



let a = +prompt(`Введите число`);
let b = +prompt(`Введите число`);

let sum = (a + b);
let vichet = (a - b);
let proizv = (a * b);

alert(`${a}+${b}=${sum}`);
alert(`${a}-${b}=${vichet}`);
alert(`${a}*${b}=${proizv}`);