// На вход программе подается число в двоичной системе счисления. Необходимо
// преобразовать его в десятичную систему счисления


// Функция parseInt() принимает строку в качестве аргумента и возвращает целое
//  число в соответствии с указанным основанием системы счисления.


const btn = document.querySelector(".btn")
btn.addEventListener("click", function () {
    const two = document.querySelector(".two");
    const result = document.querySelector(".result")
    const teen = parseInt(+two.value, 2)
    result.innerHTML = teen; 
})