// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Необходимо вывести количество пар ключ значение объекта)


let obj = {};
let n = +prompt("Введите ограничитель") 

function createObj(n_, obj_) {
    try {
        if (n_ <= 0) throw new Error("Значение n - отрицательное ") 
        for (let i = 0; i < n_; i++) {
            obj_[i] = i
        }
        console.log(obj_);
        const objLength = Object.keys(obj_).length
        alert(objLength)
    } catch (err) {
        alert(err.message)
    }
}

const result = createObj(n, obj)