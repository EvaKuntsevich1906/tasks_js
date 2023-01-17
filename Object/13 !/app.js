// Напишите функцию, генерирующую надежный пароль. (Math.random)



const pwdGeneration = () => {
    const symbols = `1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*`
    const symbolsArray = symbols.split("");
    let pwd = ""
    let pwdLength = +prompt("Введите количество символов, которое должен содержать будущий пароль");
    for (let i = 0; i <= pwdLength; i++) {
        symbolsArray.find(Math.random(1,71))
    }
}
console.log(pwdGeneration());

//метод find() , который возвращает значение найденного в массиве элемента вместо его индекса.