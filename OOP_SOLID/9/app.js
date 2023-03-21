// Реализуйте класс Сonversion, сдержащий метод doBinaryNumber, преобразующий
// все числа 2 системы счисления в 10

const inp = document.querySelector(".inp").value;
class Conversion {
    constructor (inp) {
        this.inp = inp;
    }

    doBinaryNumber () {
        const btn = document.querySelector(".btn");
        btn.addEventListener("click", function () {
            this.inp.toString(2)
        })
    }
}

const conversion = new Conversion(doDecimalNumber(inp));
