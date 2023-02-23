// . По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив строк. Необходимо вывести: полный
// массив из всех элементов, а также массив из уникальных значений

const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const arr = document.querySelector(".array");
const unique = document.querySelector(".unique");
let newarr = [];
let uniqVal = []
btn.addEventListener("click", function findUniqueValue() {
    try {
        if (input.value === "") {
            throw new Error("Вы не ввели значение")
        } else {
            newarr.push(input.value)
            arr.innerHTML = newarr;
            input.value = "";

            for (let i = 0; i < newarr.length; i++) {
                if (!uniqVal.includes(newarr[i])) {
                    uniqVal.push(newarr[i])
                }
            }

            unique.innerHTML = uniqVal;
        }
    } catch (err) {
        alert(err.message)
    }


})