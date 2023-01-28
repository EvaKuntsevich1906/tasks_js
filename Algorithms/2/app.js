// На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

let pwdString = prompt("Введите ваш пароль. Пароль должен быть НАДЕЖНЫМ.");
let password = pwdString.split("")
console.log(password)
function checkpassword(password_) {
    let lettersUpper = 0;
    let lettersLower = 0;
    let numbers = 0;
    for (let i = 0; i < password_.length; i++) {
        if (password_.length >= 8) {
            (password_[i] === password_[i].toLowerCase()) ? lettersLower += 1 : lettersUpper += 1; 
        } else alert("Ваш пароль слишком маленький. Введите пароль длиной минимум 8 символов")
    }
}

console.log(checkpassword(password));