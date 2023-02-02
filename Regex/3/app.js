// . На вход подается строка из 2 и более слов. Необходимо все пробелы заменить на
// “!”. Если же длина исходной строки не изменилась, вывести true, в противном
// случае бросить исключение и обработать

const str = prompt("Введите несколько слов через пробел");

function checking(str) {
    try {
        const strreplace = str.replaceAll(/ /gm, "!")
return strreplace
    } catch (err) {
        return err.message
    }
}

const result = checking(str);
console.log(result);