// На вход программе подается строка. Преобразуйте первую букву каждого 
// // слова строки в верхний регистр.


// let str = prompt();
// let arr = str.split("");
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i - 1] === " ") {
//         result.push(arr[i].toUpperCase())
//     } else {
//         result.push(arr[i])
//     }
// }

// result.join().toString()

// alert(result)

let str = prompt();
let arr = str.split(` `);
let result = " ";
for (let i = 0; i < arr.length; i++) {
    result += arr[i][0].toUpperCase() + arr[i].slice(1) + " "
}
console.log(result);


// let str = prompt();
// let arr = str.split("");
// let result = [];
// for (let i = 1; i < arr.length; i++) {
// if (arr[i-1] === " "){
//  result.push(arr[i].toUpperCase())
// } else {
//     result.push(arr[i])
// }
// }
//  result = result.join("")

// alert(result)