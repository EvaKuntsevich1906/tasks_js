// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо создать объект, где каждый
// ключ – индекс элемента массива, а значение – текущее итерируемое значение
// массива
// [11, 2, 13] – {
// 0: 11,
// 1: 2,
// 2: 13
// }

const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");
const obj = document.querySelector(".obj");
const arr = document.querySelector(".arr")
let array = [];
let object = {};
btn.addEventListener("click", function generationArray() {
    try {
        if(inp.value) {
            array.push(inp.value)
            arr.innerHTML = array;
            for (let i = 0; i < array.length; i++) {
                object[i] = array[i]
                obj.innerHTML = JSON.stringify(object)
            }
            inp.value = "";
        } else {
            throw new Error("Значение отстствует")
        }
    } catch (err) {
        alert(err.message)
    }
})