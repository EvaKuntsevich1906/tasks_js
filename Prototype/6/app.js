// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Необходимо отобразить на экране объект (помните, что окно браузера
//     не воспринимает объекты как тип данных JavaScript. Для отображения неоходимо
//     преобразовать строку в ...)
const n = 48;
let obj = {}

function checkObj(n, obj) {
    try {
        for (let i = 0; i < n; i++) {
            obj[i] = i
        }
        const objTag = document.querySelector(".obj")
        const jsonObj =  JSON.stringify(obj)
        objTag.innerHTML = jsonObj
    } catch (err) {
        alert(err.message)
    }
}
const result = checkObj(n, obj)