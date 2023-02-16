// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом 

const btn = document.querySelector(".btn");
const inp = document.querySelector(".inp");
const result = document.querySelector(".result")
const arr = []
btn.addEventListener("click", function () {
    try {
        if (!inp.value) throw new Error(`Input is empty`);
        arr.push(inp.value)
        inp.value = " "
        result.innerHTML = arr;
    } catch (err) {
        alert(err.message)
    }
})