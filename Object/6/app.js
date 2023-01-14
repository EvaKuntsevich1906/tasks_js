// На входе статичный объект. Необходимо числовые значения удвоить на выходе.


const obj = {
    1: "one",
    2: "two",
    "three": 3,
    "four": 4,
    "five": 5
}
let arr = [];
for (const key in obj) {
    if(!isNaN(obj[key])) {
        arr.push(obj[key]*2)
    }
}
console.log(arr);
