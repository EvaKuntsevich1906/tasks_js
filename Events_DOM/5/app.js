// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута.
// Проверки на ввод. Обработать ошибки


function messageOutput() {
    alert("Вывод сообщения")
}

const button = document.querySelector(".btn");
button.addEventListener("click", function valueSubstitution() {
    try {
        const input = document.querySelector(".inp");
        if (!input.value) throw new Error("Отсутствует значение")
        alert(input.value)
    } catch (err) {
        alert(err.message)
    }
})