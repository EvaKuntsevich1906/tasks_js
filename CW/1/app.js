let num = prompt("Введите неотрицательное число содержащее более двух цифр");

function reversNum(num_) {
    try {
        if (isNaN(num_)) throw new Error("Введенное значение не является числом")
        return num_.split("").sort().reverse().join("")
    } catch (err) {
        return err.message
    }
}
let result = reversNum(num);
alert(result);