// Зааписать в результат удвоенное значение инпута. Добавить провер

const button = document.querySelector(".btn");
button.addEventListener("click", function multiplication() {
    try {
        let result = document.querySelector(".result")
        let input = document.querySelector(".inp");
        if (!input.value) throw new Error("Отсутствует значение")
        result.innerHTML = `Результат: ${input.value * 2}`
    } catch (err) {
        alert(err.message)
    }
})