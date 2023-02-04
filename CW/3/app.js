// Реализуйте функцию, которая принимает число и возвращает возвенную
//  в квадрат каждую цифру числа соединяя их. Добавить проверки


let num = prompt("Введите число состоящее из двух и более цифр");

function squaring(num_) {
    try {
        if (isNaN(num_)) throw new Error("Вы ввели не число")
        let arrnum = num.split("")
        let arrres = "";
        for (let i = 0; i < arrnum.length; i++) {
            arrres+=(arrnum[i] ** 2)
        }
        return arrres
    } catch (err) {
        return err.message
    }
}

let result = squaring(num);
alert(result)