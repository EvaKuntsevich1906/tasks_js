// Напишите программу, которая находит наименьшее и наибольшее из пяти 
// чисел. Предварительно изучите модуль Math и в отдельности Math.min и 
// Math.max

let FirstNumber = +prompt(`Введите число`);
let SecondtNumber = +prompt(`Введите число`);
let ThirdNumber = +prompt(`Введите число`);
let FourthNumber = +prompt(`Введите число`);
let FifthNumber = +prompt(`Введите число`);

let a = Math.max(FirstNumber, SecondtNumber, ThirdNumber, FourthNumber, FifthNumber);
let b = Math.min(FirstNumber, SecondtNumber, ThirdNumber, FourthNumber, FifthNumber);

alert(`Наибольшее число из всех введенных чисел =  ${a}`);
alert(`Наименьшее число из всех введенных чисел =  ${b}`);