// На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи - автоинкремент (генерируется автоматически от 1 до n). Значение каждого
// ключа – рандомное число от 1 до 100. Вывести каждое значение объекта с
// помощью values

const n = 50;
let obj = {}

function checkObj(n, obj) {
    try {
        for (let i = 0; i < n; i++) {
            obj[i] = Math.floor(Math.random() * 100)
        }
        let arr = Object.values(obj)
        if (arr.length == 0) {
            throw new Error("В объекте нет пар, увеличьте число n")
        } else alert(`Значения ключей в объекте ${arr}`)
    } catch (err) {
        alert(err.message)
    }

}
const result = checkObj(n, obj)