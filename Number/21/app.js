// //Пользователь вводит с клавиатуры 2 числа: a и b. Проверьте, что a делится 
// без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе 
// выведите 'Делится с остатком' и остаток от деления.


let value1 = +prompt();
let value2 = +prompt();

let res = (value1%value2);

(value1%value2 === 0 ) ? alert("Делится без остатка") : alert (`Делится с остатком, остаток от деления равен ${res} `);