// Вы вводите строку. Проверить является ли это слово палиндром. Добавить
// проверки

const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");


btn.addEventListener("click", function () {
    try {
        if (inp.value === inp.value.split("").reverse().join("")) {
         result.innerHTML = "This is palidrome"
    } else {}
    } catch (err) {
        result.innerHTML = err.message
    }
})