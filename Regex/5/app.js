// На вход подается строка в виде url. Необходимо написать регулярное выражение
// для данной строки. Если же строка подходит под регулярное выражение, то
// вывести булевое true, в противном случае бросить исключение и обработать

const url = prompt("Введите url");
//https://regex101.com/


function checking(url) {
    try {
        if (!/^[http | https]+\:\/\/[a-zA-Zа-яА-Я0-9]+\.[а-яА-ЯA-Za-z]+\/$/gm.test(url)) {
            throw new Error("Это не url")
        }else {
           return true
        }
    } catch (err) {
        return err.message
    }
}
const result = checking(url); 
console.log(result);