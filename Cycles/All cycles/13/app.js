// Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму всех положительных элементов массива циклом for of


let arr = [-3, 4,-5,6,-7,4]; 

let counter = 0; 

for(let value of arr) {
    if (value > 0) {
        counter += value
    }
}
console.log(counter);