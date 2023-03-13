// 2. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на почту. Вывести true, если провека успешна

class DomHtml {
    constructor() {
        this.generateEvent()
    }

    generateEvent() {
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            const inp1 = document.querySelector('.inp1').value;
            this.middleware(inp1);
        })
    }

    middleware(inp1) {
        try {
            if (!/^[a-z]+@[a-z]+\.[a-z]{1,5}$/gm.test(inp1)) {
                throw new Error("Некоректный ввод, false")
            } else {
                alert(true)
            }
        } catch (err) {
            alert(err.message)
        }
    }

}
const domHtml = new DomHtml()