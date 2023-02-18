// Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
// проверки 

const obj = {
    name: "Eva",
    gender: "Female",
    years: 20,
    hb: "19.06.2002",
}

function findCountElementsInObject(obj) {
    try {
        const arr = Object.entries(obj)
        alert(`Длина объекта равна = ${arr.length}`)
        if (arr.length == 0) throw new Error("Объект не имеет длины")
    } catch (err) {
        alert(err.messagw)
    }
}


const result = findCountElementsInObject(obj)