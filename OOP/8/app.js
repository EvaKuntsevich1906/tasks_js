// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.


class Validator {
    constructor(email) {
        this.email = email;
    }

    isValid(email) {
        try {
            if (!/^[a-z]+@[a-z]+\.[a-z]{1,5}$/gm.test(email)) throw new Error("Некоректный ввод, false")
            return true
        } catch (err) {
            alert(err.message)
        }
    }
}

const emailValue = prompt("Введите электронную почту")
const validator = new Validator();
console.log(validator.isValid(emailValue));