// На вход статичный объект. Необходимо объект проверить на пустоту. Если же
// объект пустой, то выводим false, если же содержит хотя бы одну пару (ключ:
//     значение), то true

const obj = {
    1: "one",
    2: "two",
    "three": 3,
    "four": 4,
    "five": 5
}
let sum = 0
for (const key in obj) {
    sum += 1
}
(sum === 0) ? console.log(false): console.log(true)