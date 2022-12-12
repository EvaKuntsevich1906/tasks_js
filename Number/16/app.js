//Есть значение. Добавить проверку на ввод только чисел.
// Если число, вывести true, в противном случае false


let value = prompt();

if (!isNaN(value)) {
    alert ("true")
}else {
    alert ("false")
};