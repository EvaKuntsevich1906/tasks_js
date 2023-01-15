// На входе динамичный массив; число n с клавиатуры. Необходимо написать
// функцию, возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11


let n = +prompt("Введите число");

const checking = (n) => {
    let maxValue = [];
    let arr = [1, 9, 45, 11, 10];
    arr.forEach(el => {
        if (el > n) {
            maxValue.push(el)
        }
    }) 
    return maxValue
}
console.log(checking(n));