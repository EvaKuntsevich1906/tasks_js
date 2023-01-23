// 1. Реализуйте цикл на проверку массива. Вам необходимо оставить в данном массиве только числа 

// let arr = ["одло", 2, 4,5,6,"ловп"]; 

// // arr = arr.filter(el => !isNaN(el)) 

// // console.log(arr);
// let res = []; 

// for(let i = 0; i<arr.length; i++) {
//     if(!isNaN(arr[i])) {
//         res.push(arr[i])
//     }
// }

// console.log(res);

// Напишите IIFE функцию, которая принимает массив с 
// дублирующими значениями. Необходимо отфильтровать 
// массив удалив дубликаты 
// Пример: 1,1,1,2,2,3,3,4,5,6,6 -> 1,2,3,4,5,6

let arr = [1,1,1,2,2,3,3,4,5,6,6];

(function (arr_) {
    let rez = []
    for( let i = 0; i<arr_.length; i++) {
        if (rez.indexOf(arr_[i]) < 0 ) {
            rez.push(arr_[i])
        }
    }
    console.log(rez);
 }(arr))
