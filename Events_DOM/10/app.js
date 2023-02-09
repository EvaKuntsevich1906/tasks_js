// После нажатия на кнопку «Разблокировать» мы можем вносить изменения в
// инпут. После нажатия на заблокировать данное действие запрещается, тем самым
// выключая возможность редактирования значения инпута

const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const input = document.querySelector(".inp");

function updteValueInInput () {
    if (button1.addEventListener("click", (input_) =>
            input_.disabled = true
        ));
    else if ((button2.addEventListener("click", (input_) =>
            input_.disabled = false
        )));
}(input)

