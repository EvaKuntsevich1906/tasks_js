// Вы вводите числа в поле для ввода формируя и отображая массив.
// Необходимо также отображать только уникальные значения массива
// [1, 1, 4, 2, 3, 3] -> [4, 2]

const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");
const arrHTML = document.querySelector(".arr");
const uniq = document.querySelector(".uniq");

let arr = []
btn.addEventListener("click", () => {
    let arruniq = [];
    arr.push(inp.value);
    arrHTML.innerHTML = `Массив ${arr}`;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i + 1] && arr[i] != arr[i - 1]) {
            arruniq.push(arr[i])
        }
    }
    uniq.innerHTML = `Уникальные : ${arruniq}`;
})