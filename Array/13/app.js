// Есть массив [1, 5, 2, 4, 3]. Найти максимальное используя цикл


let arr = [1, 5, 2, 4, 3];
let maxval = arr[0] // 1 элемент массива
for (let i = 0; i < arr.length; i++) {
    if (maxval < arr[i]){
        maxval = arr[i]
    }
}

alert(`Максимальное число из массива это ${maxval}`)