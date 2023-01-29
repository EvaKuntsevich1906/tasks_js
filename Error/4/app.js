// Дана строка массива. Необходимо спарсить строку. Если же после того как вы
// спарсили данные у вас не массив – бросить исключение. Вывести
// те элементы массива, id котрых – четное значение

let arr = JSON.parse(`[
    { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }
    ]`)

function checkingArray(arr_) {
    try {
        if (!Array.isArray(arr_)) throw new Error("Это не массив");
        return arr_.filter((el) => el.id % 2 == 0)
    } catch (err) {
        return err.message
    }
}

let result = checkingArray(arr);
console.log(result);