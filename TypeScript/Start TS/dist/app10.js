// Напишите программу, которая определяет, является ли заданная строка
// анаграммой (состоит из тех же символов, но в другом порядке) другой строки
const firstword = prompt("Введите первое слово");
const twoword = prompt("Введите втоое слово");
for (let i = 0; i < firstword.length; i++) {
    if (firstword.includes(twoword[i])) {
        console.log('Да, этограммы');
    }
    else {
        console.log('Нет, это не анограммы');
    }
}
