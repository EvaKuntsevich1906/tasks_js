// Необходимо отобразить кнопку с надписью «Нажми на меня». По клику на нее
// вывести alert с сообщением


function messageOutput () {
    alert("Вывод сообщения")
}

const button  = document.querySelector(".btn"); 
button.addEventListener("click", messageOutput)
