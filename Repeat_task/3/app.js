// Реализуйте класс HTML. Класс содержит методы bindOptionPlus, bindOptionMinus,
// содержащие по 1 обработчику события в каждом из методов. HTML разметка
// содержит: div с первоначальным значением 0 (счетчик), кнопку button с текстом +1,
// кнопку button с текстом -1. Задача:
// • По клику с текстом на кнопку +1 необходимо добавить в счетчик +1.
// • По клику с текстом на кнопку -1 необходимо отнять из счетчика -1. 

class HTML {
    constructor() {
        this.bindOptionMinus();
        this.bindOptionPlus()
    }
    bindOptionPlus() {
        const firstValue = document.querySelector(".firstValue");
        const btnPlus = document.querySelector(".btnPlus");
        btnPlus.addEventListener("click", () => {
            firstValue.innerHTML = +firstValue.textContent + 1;
        })
    }

    bindOptionMinus() {
        const firstValue = document.querySelector(".firstValue");
        const btnMinus = document.querySelector(".btnMinus");
        btnMinus.addEventListener("click", () => {
            firstValue.innerHTML = +firstValue.textContent - 1;
        })
    }
}
const html = new HTML();
console.log(html);