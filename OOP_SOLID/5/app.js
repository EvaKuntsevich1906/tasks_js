// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivid

class NewDom {
    constructor() {
        this.generateEvent();
    }

    generateEvent() {
        const btn = document.querySelector('.button');
        btn.addEventListener('click', function () {
            const inp1 = document.querySelector('.inp1').value;
            const inp2 = document.querySelector('.inp2').value;
            this.doPlus(inp1, inp2);
            this.doMinus(inp1, inp2);
            this.doMultiply(inp1, inp2);
            this.doDivide(inp1, inp2);
        })
    }
        doPlus (inp1, inp2) {
            const plus = document.querySelector(".plus");
            plus.innerHTML = `Сумма значений равна ${+inp1 + +inp2}`
        }
        doMinus(inp1, inp2) {
            const minus = document.querySelector(".minus");
            minus.innerHTML = `Разность значений равна ${+inp1 - +inp2}`
        }
        doMyltiply(inp1, inp2) {
            const multiply = document.querySelector(".multiply");
            multiply.innerHTML = `Произведение  значений равно ${+inp1 * +inp2}`
        }
        doDivid(inp1, inp2) {
            const divid = document.querySelector(".divid");
            divid.innerHTML = `Частное   значений равно ${+inp1 / +inp2}`
        }

    }


const newdom = new NewDom();