// Необходимо отобразить кнопку и инпут со значением по умолчанию. По клику на
// кнопку заменить значение инпута


function valueSubstitution() {

}

const button = document.querySelector(".btn");
button.addEventListener("click", function valueSubstitution() {
    try {
        const input = document.querySelector(".inp");
        if (!input.value) throw new Error("Отсутствует значение")
        alert(input.value)
    } catch (err) {
        alert(err.message)
    }
})