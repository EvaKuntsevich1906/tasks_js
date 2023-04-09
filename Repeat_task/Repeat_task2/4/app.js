// 4. Вы вводите строку. Неоходимо проверить является ли эта строка датой и
// соответствует шаблону вида хх-хх-хххх

const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    try {
        if (!/^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/gm.test(inp.value)) {
            throw new Error ("NE OK!!!!")
        } alert("ok")
    } catch (err) {
        alert(err.message)
    }

})