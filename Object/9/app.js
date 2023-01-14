// На входе статичный объект. Необходимо посчитать количество пар (ключ:
// значение)


const obj = {
    1: "one",
    2: "two",
    "three": 3,
    "four": 4,
    "five": 5
}
let arr = [];
for (const key in obj) {
        arr.push(obj[key])
}

let keys = obj[keys]



console.log(`Количество пар равно ${arr.length}`);
