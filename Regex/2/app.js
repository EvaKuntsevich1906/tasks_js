// На вход подается строка вида “имя фамилия возраст”. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

const value = prompt("Введите ваше имя, фамилию и возраст");

function checking(value) {
    try {
        if (!/^[A-Z][a-z]+ [A-Z][a-z]+ [0-9]{1,2}$/gm.test(value)) throw new Error("Некорректный ввод")
        return true 
    } catch (err) {
        return err.message
    }
}
const result = checking(value);
console.log(result);