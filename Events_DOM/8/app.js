// У вас есть кнопка. После нажатия поменять background.

const button = document.querySelector(".btn");

button.addEventListener("click", function newStyle() {
    (button.style.backgroundColor == "blue") ? button.style.backgroundColor = "red" : button.style.backgroundColor = "blue"
})