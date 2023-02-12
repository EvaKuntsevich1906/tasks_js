
// После нажатия на кнопку «Разблокировать» мы можем вносить изменения в
// инпут. После нажатия на заблокировать данное действие запрещается, тем самым
// выключая возможность редактирования значения инпута

const input = document.querySelector(".inp");

const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");

const updteValueInInput = (status) => {
(status) ? input.disabled = true : input.disabled = false 
}



button1.addEventListener("click", () => updteValueInInput(true))
button2.addEventListener("click", () => updteValueInInput(false))


