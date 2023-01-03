// Сумма 5 элементов массива введенных с клавиатуры

let a = +prompt();
let b = +prompt();
let c = +prompt();
let d = +prompt();
let e = +prompt();

let arr = [a, b, c, d, e]
let sum = 0
for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
        alert("Не все элементы массива являются числовыми значениями")
    } else {
        sum += arr[i]
    }
}
alert(sum)