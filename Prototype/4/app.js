// По условию задачи даны инпут и кнопка. Необходимо преобразовать строку в
// CamelCase (примерСтрокиВCamelCase )

const inp = document.querySelector(".inp").value; 
const btn = document.querySelector(".btn"); 
const result = document.querySelector(".result");
btn.addEventListener("click", function toCamelCase () {
const str = inp.split(" ").map((el, index) => index == 0? el : el[0].toUpperCase() + el.slice(1)).join(" ")
result.innerHTML = str
inp = ""
})
