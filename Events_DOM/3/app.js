// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута

function messageOutput() {
    alert("Вывод сообщения")
}

const button = document.querySelector(".btn");
button.addEventListener("click", function valueSubstitution() {
    const input = document.querySelector(".inp");
    alert(input.value)
})