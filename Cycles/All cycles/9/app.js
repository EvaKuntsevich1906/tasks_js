// Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 3 циклом for of

let arr = [2,5,9,15,0,4]; 

let resultArr = [];

for(let value of arr) {
  if (value%3 === 0 ) {
    resultArr.push(value)
  }
}

console.log(resultArr);