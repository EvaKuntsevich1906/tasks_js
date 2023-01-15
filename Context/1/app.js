// На входе число n. Напишите функцию, которая переворачивает число.

let  value = prompt();

let  reverse = el => {
    return el.split("").reverse().join("");
}
console.log(reverse(value));


