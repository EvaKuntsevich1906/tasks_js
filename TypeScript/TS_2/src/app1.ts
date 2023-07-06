// Создайте массив чисел и найдите сумму всех нечетных элементов в массиве

const arrapp1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterarrapp1 = arrapp1.filter(el => {
   return el % 2 === 1 ? true  : false
});

const countapp1 = filterarrapp1.reduce((sum, el) => {
return sum + el 
})
console.log(countapp1);
