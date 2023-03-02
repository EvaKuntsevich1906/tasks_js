// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.
// 9 Дополнить класс Validator. Добавить метод isURL для проверки на url.

class Validator {
    constructor(email, url) {
        this.email = email;
        this.url = url;
    }

    isValid(email) {
        try {
            if (!/^[a-z]+@[a-z]+\.[a-z]{1,5}$/gm.test(email)) throw new Error("Некоректный ввод, false")
            return true
        } catch (err) {
            alert(err.message)
        }
    }

    isURL(url) {
        this.isValid = true;
        try {
            if (!/^[http | https]+\:\/\/[a-zA-Zа-яА-Я0-9]+\.[а-яА-ЯA-Za-z]+\/$/gm.test(url))  throw new Error("Это не url")
            return true
        } catch (err) {
            alert(err.message)
        }
    }
}

const emailValue = prompt("Введите электронную почту");
const urlValue = prompt("Введите URL")
const validator = new Validator();
console.log(validator.isValid(emailValue));
console.log(validator.isURL(urlValue));