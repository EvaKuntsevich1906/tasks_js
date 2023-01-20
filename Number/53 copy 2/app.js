// Ряд Фибоначчи 
// Ряд Фибоначчи - это ряд чисел, в котором каждое предыдущее 
// равно сумме двух предудущих ему чисел
let value = prompt();

if (isNaN(value)) {
    alert("Ошибка ввода")
} else {
    let arr = []
    for (let i = 0; i < value; i++) {
        if (i < 2) {
            arr.push(i);
        } else {
            arr.push(arr[i - 2] + arr[i - 1]);
        }
    }
    alert(arr)
}