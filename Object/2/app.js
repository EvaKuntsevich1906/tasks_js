// На входе статичный объект. Необходимо вывести все числовые ключи


const obj = {
    1: "one",
    2: "two",
    "three": 3
}

for (const key in obj) {
    if (!isNaN(key)) {
        console.log(key)
    }
}