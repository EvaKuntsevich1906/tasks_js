// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0. Если
// проверка true, то вывести в Результат ряд Фибоначчи. Рекурсия

function messageOutput() {
    alert("Вывод сообщения")
}

const button = document.querySelector(".btn");
button.addEventListener("click", function() {
    try {
        const input = document.querySelector(".inp");
        if (input<0) throw new Error ("Значение не может быть меньше нуля или ровняться нулюю")
 
    } catch (err) {
        alert(err.message)
    }
})