// Необходимо отобразить кнопку с надписью «Нажми на меня» и инпут со
// значением по-умолчанию «+375(хх)ххх-хх-хх». По клику на кнопку заменить
// значение инпута на «+375(29)111-11-11»


function messageOutput () {
    alert("Вывод сообщения")
}

const button  = document.querySelector(".btn"); 
button.addEventListener("click", function valueSubstitution () {
    const input = document.querySelector(".inp"); 
   input.value = "+375(29)111-11-11"
})
