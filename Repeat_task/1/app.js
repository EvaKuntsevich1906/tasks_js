// Реализуйте класс HTML. Класс содержит метод bindOption содержащий обработчик
// события. Задача:
// • По клику на кнопку необходимо получить значение input и отобразить в пустой div
// (в созданной html разметке) посредством InnerHTML.
// • Добавить стили для отображения текста input: например, изменить цвет букв.
// • Добавить проверки на получение значения input

class HTML {
    bindOption() {
        const btn = document.querySelector(".btn");
        const inp = document.querySelector(".inp");
        const output = document.querySelector(".output");
        try {
            btn.addEventListener("click", () => {
                output.innerHTML = inp.value;
                if (!isNaN(inp.value)) throw new Error("Это числа")
                output.style = "color : red"
            })
        } catch (err) {
            alert(err.message)
        }
    }
}

const html = new HTML();
alert(html.bindOption());