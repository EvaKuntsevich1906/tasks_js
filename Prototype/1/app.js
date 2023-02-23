// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо вывести среднее значение
// этого массива

const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const result = document.querySelector(".result");
const array = document.querySelector(".array");
const avg = document.querySelector(".avg");
let arr = [];

btn.addEventListener("click", function findValue() {
    arr.push(input.value)

    array.innerHTML = arr;
    let sum = arr.reduce((start, el) => {
        return start + +el
    }, 0)

    avg.innerHTML = sum / arr.length
})