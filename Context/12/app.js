// Работа с замыканием. Напишите функцию, каждый вызов который будет
// генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока
// не будут перебраны все числа из этого промежутка.

// let arr = [1,2]

// function numberGeneration() {
//     return function () {
//         let i = 0;
//         while (arr.sort().length <= 100) {
//             if (!arr.includes(i)) arr.push(Math.ceil(Math.random(1, 100)))
//         }
//         return arr
//     }
// }

// let numgen = numberGeneration();
// alert(numgen())



// let concat = "hanna"; 

// function wrapFunction() {
//     return function () {
//        concat = concat+" pleshko"
//         return concat
//     }
// }
// let  counter = wrapFunction()

// // alert (counter())
// // alert (counter())
// // alert (counter())
// // alert (counter())
// // alert (counter())
// // alert (counter())

let concat = []; 

function wrapFunction() {
    return function () {
                while (concat.sort().length <= 100) {
                    let num = Math.floor(Math.random() * 101)
                    if (!concat.includes(num)) concat.push(num)
                }
        return concat.sort()
    }
}
let  counter = wrapFunction()

console.log(counter())
console.log(counter())
console.log(counter())

