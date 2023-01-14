// На входе статичный объект. Необходимо вывести все четные значения


const obj = {
    1: "one",
    2: "two",
    "three": 3,
    "four": 4
}

for (const key in obj) {
    if (!isNaN(obj[key]) && obj[key]%2 == 0) {
        console.log(obj[key])
    }
}