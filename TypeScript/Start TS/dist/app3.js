// Создайте переменную password и присвойте ей строковое значение. Если длина
// пароля больше 8 символов, выведите сообщение "Пароль надежный", иначе
// выведите сообщение "Пароль слишком короткий"
let pwd = prompt("Введите пароль длиной 8 или более символов");
if (pwd.length >= 8) {
    console.log("Введенный пароль является надежным");
}
else {
    console.log("Введенный пароль является неанадежным, обновите страницу и введите пароль заново");
}
