// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. Проверьте есть ли в массиве элемент
// со значением, равным 4. Посчитать количество повторений числа 4 в массиве

let arr17: number[] = [1, 2, 5, 9, 4, 13, 4, 10];


let sum17: number = arr17.reduce((sum17, el) => {
   if(el == 4) {
      return sum17+1;
   } else {
      return sum17+0;
   }
});

console.log(sum17);
