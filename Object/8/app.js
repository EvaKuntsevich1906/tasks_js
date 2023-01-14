// На входе статичный объект. Необходимо посчитать количество пар (ключ:
// значение)


const obj = {
    1: "one",
    2: "two",
    "three": 3,
    "four": 4,
    "five": 5
}

// 1 cпособ
let arr = [];
for (const key in obj) {
        arr.push(obj[key])
}

// 2 cпособ
let keys = Object.keys(obj);
let sum = Object.values(obj)
(keys.length )
console.log(keys);


console.log(`Количество пар равно ${arr.length}`);
