// У вас есть кнопка. После нажатия поменять background.

const button = document.querySelector(".btn");

button.addEventListener("click", function newStyle() {
    if (button.style == "background-color: blue") {
        button.style = "background-color: red"
    } else button.style = "background-color:blue"
})