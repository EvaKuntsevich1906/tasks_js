// На вход подается строка в виде электронной почты пользователя. Необходимо
// написать регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать
const mail = prompt("Введите эл.почту");


function checking(mail) {
    try {
        if (!/^[a-z]+@[a-z]+\.[a-z]{1,5}$/gm.test(mail)) 
            throw new Error("Это не почта")
            return true
    } catch (err) {
        return err.message
    }
}
const result = checking(mail); 
console.log(result);