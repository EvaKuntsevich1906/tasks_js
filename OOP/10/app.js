// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.
// 9 Дополнить класс Validator. Добавить метод isURL для проверки на url.

class Validator {
    constructor(email, url,data) {
        this.email = email;
        this.url = url;
        this.data = data;
    }

    isValid(email) {
        try {
            if (!/^[a-z]+@[a-z]+\.[a-z]{1,5}$/gm.test(email)) throw new Error("Некоректный ввод, false");
            return true
        } catch (err) {
            alert(err.message)
        }
    }

    isURL(url) {
        this.isValid = true;
        try {
            if (!/^[http | https]+\:\/\/[a-zA-Zа-яА-Я0-9]+\.[а-яА-ЯA-Za-z]+\/$/gm.test(url)) throw new Error("Это не url");
            return true
        } catch (err) {
            alert(err.message)
        }
    }

    isData(data) {
        try {
            if (!/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/gm.test(data)) throw new Error("Некорректно введена дата");
            return true
        } catch (err) {
            alrt(err.messag)
        }
    }
}

const emailValue = prompt("Введите электронную почту");
const urlValue = prompt("Введите URL"); 
const dataValue = prompt("Введите дату");

const validator = new Validator();
console.log(validator.isValid(emailValue));
console.log(validator.isURL(urlValue));
console.log(validator.isData(dataValue));