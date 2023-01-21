// На вход подается число. Необходимо вывести все числа от 1 до введенного числа
// кратные 3. 

let num = +prompt();

const arr = [];

for(let i = 1; i<= num; i++) {
    if(i%3 === 0) {
        arr.push(i)
    }
}
console.log(arr);

