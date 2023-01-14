//  На входе статичный объект. Необходимо посчитать количество пар (ключ:
//  значение) где значение число и вывести количество 

const obj = {
    1: "one",
    2: "two",
    "three": 3,
    "four": 4,
    "five": 5
}


let value = Object.values(obj)
let sum = 0
value.forEach(el => {
    if (!isNaN(el)) {
        sum += 1
    }
})

console.log(`Количество пар равно ${sum}`);