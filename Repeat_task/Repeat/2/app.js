// Напишите функцию которая принимает массив чисел и возвращает сумму всех
// элементов массива. Добавьте функцию проверки. Написать синтаксис 3 функц

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//declaration
function toSumDecl(arr_) {
    let counter = 0
    for (let i = 0;   i < arr_.length; i++) {
        counter += arr_[i]
    }
    return counter
}
console.log(toSumDecl(arr));

//eхpression 

let toSumExpr = function (arr_) {
let counter = arr_.reduce(function(sum, elem)  {
    return sum + elem 
})
return counter
}
console.log(toSumExpr(arr));

//arrow

let toSumArrow =  (arr_) =>  {
    let counter = 0
    for (let i = 0;   i < arr_.length; i++) {
        counter += arr_[i]
    }
    return counter
};

console.log(toSumArrow(arr));