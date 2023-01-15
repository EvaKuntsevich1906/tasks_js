// Напишите функцию, которая принимает два параметра: строку и букву. Функция
// должна подсчитывать количество вхождений указанной буквы в строке. Добавить
// проверки

let s = prompt("Введите букву");
let str = prompt("Введите строку");

const counterChecking = (s, str) => {
    let counter = 0;
    str.split("").forEach(el => {
        if (el.includes(s)) counter++
    })
    return counter
}

console.log(counterChecking(s, str));