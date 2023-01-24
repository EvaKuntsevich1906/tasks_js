//  Дан массив с элементами [2, 3, 4, 5]. С помощью 3 циклов найдите произведение
// элементов этого массива

// for
let arr = [2, 3, 4, 5];
let counter = 1;
for (let i = 0; i < arr.length; i++) {
    counter *= arr[i]
}
console.log(counter);

//for of 
let counter2 = 1;
for (let value of arr) {
    counter2 *= value
}
console.log(counter2);

//while

let counter3 = 1;
let i = 0;
while (i < arr.length) {
    counter3 *= arr[i]
    i++
}
console.log(counter3);