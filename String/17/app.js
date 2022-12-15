// На вход программе подается строка. Преобразуйте первую букву каждого 
// слова строки в верхний регистр.


let str = prompt();
let arr = str.split("");
let result = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === " ") {
        result.push(arr[i].toUpperCase())
    } else {
        result.push(arr[i])
    }
}

result.join(",").replaceAll(",", "")

alert(result)