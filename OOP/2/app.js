// Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел,
// разность, произведение, частное. 2 числа передаются в класс, далее вызываеются
// соответствующие функции. Добавить проверки на ввод

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    summa() {
        return `${this.num1 + this.num2}`
    }

    raznost() {
        return `${this.num1 - this.num2}`
    }

    proizved() {
        return this.num1 * this.num2
    }

    chactnoe() {
        return `${this.num1 / this.num2}`
    }
}
const calculator = new Calculator(49, 20);

console.log(calculator.summa());
console.log(calculator.raznost());
console.log(calculator.proizved());
console.log(calculator.chactnoe());