//  Напишите функцию, которая принимает 2 параметра и возводит первое значение
// в степень 2 параметра. Добавьте функцию проверки. Написать синтаксис 3
// функций 

let num = +prompt("Введите число"); 
let step = +prompt("Введите степень"); 

//declaration
function vozvedenieDecl (num_, step_) {
    return num**step
}
console.log(vozvedenieDecl(num,step));

//eхpression 
 
let vozvedenieExpr = function (num_, step_) {
    return num**step
}
console.log(vozvedenieExpr(num, step));

//arrow 

let vozvedenieArrow = (num_, step_) => num_**step_ ;
console.log(vozvedenieArrow(num, step));