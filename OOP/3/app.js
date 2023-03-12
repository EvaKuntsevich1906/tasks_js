// Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод
class WordString {
    constructor(string) {
        this.string = string;
    }

    upperFirst() {
        return this.string[0].toUpperCase() + this.string.slice(1)
    }

    reverseString () {
        return this.string.split("").reverse().join(""); 
    }

}

const wordString = new WordString("eva")
console.log(wordString.upperFirst());
console.log(wordString.reverseString());



























