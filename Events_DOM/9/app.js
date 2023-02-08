// У вас есть кнопка. После нажатия поменять background. ТАКАЯ ЖЕ КАК И 8

const button = document.querySelector(".btn");

button.addEventListener("click", function newStyle() {
    (button.style.backgroundColor == "blue") ? button.style.backgroundColor = "red" : button.style.backgroundColor = "blue"
})