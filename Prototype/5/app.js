// По условию задачи даны 2 инпута и кнопка. Необходимо вернуть true, если часть
// символов 1 строки есть в другой.
// 'rkqodlw', 'world‘ – true
// 'kacvtas', 'steak' – false

const btn = document.querySelector(".btn")

btn.addEventListener("click", function checkValue() {
    try {
        let inp1 = document.querySelector(".inp1").value
        let inp2 = document.querySelector(".inp2").value
        if (!inp1 || !inp2) throw new Error("Значения пустые")
        let inp1arr = inp1.split("");
        let inp2arr = inp2.split("");
        let result = 0
        inp1arr.forEach(element => {(inp2arr.indexOf(element) >= 0) ? result += 1 : null })
        (result > 2) ? alert("true"): alert(false)

    } catch (err) {
        alert(err.message)
    }
})