// На вход программе подается число в двоичной системе счисления. Необходимо
// преобразовать его в десятичную систему счисления


// Функция parseInt() принимает строку в качестве аргумента и возвращает целое
//  число в соответствии с указанным основанием системы счисления.


const btn = document.querySelector(".btn")
const two = document.querySelector(".two").value;
const result = document.querySelector(".result")
btn.addEventListener("click", function transformation() {
    const teen = parseInt(two, 2)
    result.innerHTML = teen; 
})