// Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод
class WordString {
    constructor(string) {
        this.string = string;
    }
    reverseStr() {
        return this.string.split("").reverse().join("")
    }
    upperFirst() {
        return this.string[0].toUpperCase() + this.string.slice(1)
    }

    upperEvery() {
        let arr = this.string.split(` `);
        for (let i = 0; i < this.string.length; i++) {
            if (this.string[i] == " ") {
                this.string[i + 1] = this.string[i + 1].toUpperCase()
            }
        }

    }
}
const singer = new Singer(`John`, `Smith`);

console.log(singer.getAutograph());