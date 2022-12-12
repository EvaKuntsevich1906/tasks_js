// Дан массив arr. Найдите среднее арифметическое
//  его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79

let arr = [12, 15, 20, 25, 59, 79];

let  sum = 0;
for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
let current = sum/arr.length;

console.log(current);