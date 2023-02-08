// После нажатия на кнопку «Разблокировать» мы можем вносить изменения в
// инпут. После нажатия на заблокировать данное действие запрещается, тем самым
// выключая возможность редактирования значения инпута

const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");

button1.addEventListener("click", function newStyle() {
    (button.style.backgroundColor == "blue") ? button.style.backgroundColor = "red" : button.style.backgroundColor = "blue"
})