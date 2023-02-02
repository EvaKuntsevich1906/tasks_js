// На вход подается строка вида: путь к файлу. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true

const route = prompt("Введите url");
//https://regex101.com/


function checking(route) {
    try {
        if (!/^[C|D]+\:\/\\+[a-zA-Zа-яА-Я0-9]+\\[а-яА-ЯA-Za-z]+\\[a-zA-Zа-яА-Я]+\[a-zA-Zа-яА-Я]+\.[a-zA-Zа-яА-Я]+$/gm.test(route))
            throw new Error("Это не url")
      
    } catch (err) {
        return err.message
    }
}
const result = checking(route); 
console.log(result);

