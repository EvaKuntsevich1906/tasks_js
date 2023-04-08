// Напишите функцию, которая принимает массив чисел и находит максимальное
// значение
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//declaration
function findMaxValue(arr_) {
    let maxVal = 0
    for (let i = 0; i < arr_.length; i++) {
     (arr_[i] > maxVal) ?  maxVal = arr[i] :null; 
    }
    
    return maxVal
}
console.log(findMaxValue(arr));