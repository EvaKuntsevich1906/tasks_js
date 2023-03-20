// Реализуйте класс Сonversion, сдержащий метод do DecimalNumber, преобразующий
// все числа 10 системы счисления в 2

const inp = document.querySelector(".inp").value;
class Conversion {
    constructor (inp) {
        this.inp = inp;
    }

    doDecimalNumber () {
        const btn = document.querySelector(".btn");
        btn.addEventListener("click", function () {
            alert(this.inp.toString(2))
        })
    }
}

const conversion = new Conversion(doDecimalNumber(inp));
