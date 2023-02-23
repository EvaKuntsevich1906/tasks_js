// . По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив строк. Необходимо вывести: полный
// массив из всех элементов, а также массив из уникальных значений

const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const array = document.querySelector(".array");
const unique = document.querySelector(".unique");
let arr = [];
btn.addEventListener("click", function findUniqueValue() {
    try {
        if (input.value == "") {
            throw new Error("Вы не ввели значение")
        } else {
            arr.push(input.value)
            array.innerHTML = arr;
            input.value = "";

            let uniqVal = []
            uniqVal = arr.filter(el => el != el)

            unique.innerHTML = uniqVal;
        }
    } catch (err) {
        alert(err.message)
    }


})