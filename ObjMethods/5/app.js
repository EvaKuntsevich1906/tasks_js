// На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи и значения - автоинкремент (генерируется автоматически от 1 до n).
// Проверить есть ли ключ 10 в объекте. 

const n = 5;
let obj = {}
let keys = "10";

function checkObj(n, obj, keys) {
    try {
        for (let i = 0; i < n; i++) {
            obj[i] = i
        }

        let valuesInObjInArray = Object.keys(obj)
        if (!valuesInObjInArray.includes(keys)) {
            throw new Error("Нет, не имеется")
        } else {
            alert
        }
        alert("Да, имеется")
    } catch (err) {
        alert(err.message)
    }

}
const result = checkObj(n, obj, keys)