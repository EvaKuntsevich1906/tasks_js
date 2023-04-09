const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");
const arrHTML = document.querySelector(".arr");
const chet = document.querySelector(".chet");
const nechet = document.querySelector(".nechet");

let arr = [];

btn.addEventListener("click", () => {
    arr.push(inp.value);
    arrHTML.innerHTML = `Массив: ${arr}`;
    const chetnye = arr.filter(el => el % 2 === 0);
    const nechetnye = arr.filter(el => el % 2 != 0);
    chet.innerHTML = ` Четные: ${chetnye}`;
    nechet.innerHTML = `Нечетные: ${ nechetnye}`;
})

