// На вход подается строка в виде числа. Необходимо написать регулярное
// выражение. Если строка состоит только из чисел, то вывести булевое true, в
// противном случае бросить исключение и обработать

const value = +prompt("Введите число");

function checking(value) {
    try {
        if (!/^[0-9]$/gm.test(value))
            throw new Error("Это не цифры")
        return true

    } catch (err) {
        return err.message
    }
}
const result = checking(value);
console.log(result);