// . Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите только уникальные
// значения массива -> [1, 5] (for)

let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort(); //сортируем массив чтобы затем сравнивать
let result = []; 

for (let i = 0; i < arr.length; i++) {
  (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) ? result.push(arr[i]) : null
}
console.log(result);