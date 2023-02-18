// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Написать функцию на поиск в объекте только четных ключей. 
const n = 10;
let obj = {

}

function checkObj(n, obj) {
    try {
        for (let i = 0; i < n; i++) {
            obj[i] = i
        }
        let arr = []
        for (let key in obj) {
            if (key % 2 === 0) arr.push(key)
        }
        if (!arr.length) throw new Error("В объекте нет четных ключей")
        const finallyArr = arr.filter(el => el != 0)
        alert(`Все четные ключи : ${finallyArr}`)
    } catch (err) {
        alert(err.message)
    }

}
const result = checkObj(n, obj)