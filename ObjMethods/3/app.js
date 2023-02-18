// На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str. Values

const obj = {
    name: "Eva",
    gender: "Female",
    years: 20,
    hb: "19.06.2002",

}

const str = "Eva";

function findKeysWithValues(obj, str) {
    try {
    let arr = Object.values(obj); 
    if(arr.includes(str)) {
        alert("Да, такое значение есть")
    }else throw new Error ("Такого значения в объекте не имеентся")
    } catch (err) {
        alert(err.message)
    }
}

const result = findKeysWithValues(obj, str)