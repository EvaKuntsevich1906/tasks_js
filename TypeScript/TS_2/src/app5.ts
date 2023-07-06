// Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2.

const arrapp5: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterarrapp5 = arrapp5.filter(el => (el % 2 == 1)&& (el % 3 === 0));
console.log(filterarrapp5);
