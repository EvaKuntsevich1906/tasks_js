// Пользователь вводит число с клавиатуры. Нужно вывести на экран сколько в этом
// числе цифр, а также положительное оно или отрицательное. Например, "Число " +
// num + " положительное". (length)

let value = +prompt("Введите число");

let valueIsSctring = value.toString().split("");

if (valueIsSctring[0] = !isNaN(valueIsSctring[0])) {
    console.log(`Это положительное число, длина числа = ${valueIsSctring.length}`);
} else {
    console.log(`Это отрицательное число, длина числа = ${valueIsSctring.length - 1}`);
}