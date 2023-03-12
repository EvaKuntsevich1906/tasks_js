// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.



class Validator {
    constructor(email) {
        this.email = email;
    }
    i

    isEmail() {
        if (!/^[a-z]+@[a-z]+\.[a-z]{1,5}$/gm.test(this.email)) throw new Error("Некоректный ввод, false")
        return true
    }

    
}
const email = prompt("Введите электронную почту")
const validator = new Validator(email)
console.log(validator.isEmail());