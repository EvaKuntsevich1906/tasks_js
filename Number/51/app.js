//На вход подается значение с помощью метода promt. Необходимо 
// проверить является ли это значение числом. Если же тип данных число, то 
// вывести “Верно”, в противном случае “Неверно”

let value = prompt();

(!isNaN(value)) ? alert("Верно") : alert("Неверно")