// На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

let pwdString = prompt("Введите ваш пароль. Пароль должен быть НАДЕЖНЫМ.");
let password = Array(pwdString)
function checkpassword(password_) {
    let lettersUpper = 0;
    let lettersLower = 0;
    let numbers = 0;
    for (let i = 0; i < password_.length; i++) {
        if (password_.length >= 8) {
            (password_[i] === password_[i].toLowerCase()) ? lettersLower++ : alert("Для надежности вашего пароля не хватает букв в мал. регистре");
            (password_[i] === password_[i].toUpperCase()) ? lettersUpper++ : alert("Для надежности вашего пароля не хватает букв в бол. регистре");
            (!isNaN(password_[i])) ? numbers++ : alert("Для надежности вашего пароля не хватает букв в чисел");

            let symbols = password_.length - (numbers + lettersLower + lettersUpper)
                (symbols > 0) ? alert("Вы ввели надежный пароль") : alert("Для надежности вашего пароля не хватает символов")
        } else alert("Ваш пароль слишком маленький. Введите пароль длиной минимум 8 символов")
    }
}

console.log(checkpassword(password));