// На входе статичный объект. Необходимо сформировать массив из всех нечетных
// ключей объекта.

const obj = {
    1: "one",
    2: "two",
    "three": 3,
    "four": 4,
    "five": 5
}

let arr = []
for (const key in obj) {
    if (!isNaN(obj[key]) && obj[key] % 2 !== 0) {
        arr.push(obj[key])
    }
}
console.log(arr)
