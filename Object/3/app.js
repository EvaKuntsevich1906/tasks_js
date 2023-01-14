// На входе статичный объект. Необходимо вывести все числовые значения


const obj = {
    1: "one",
    2: "two",
    "three": 3
}

for (const key in obj) {
    if (!isNaN(obj[key])) {
        console.log(obj[key])
    }
}