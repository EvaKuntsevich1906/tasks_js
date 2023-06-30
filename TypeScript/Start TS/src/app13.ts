
// Создайте переменную sentence и присвойте ей строковое значение
// предложения. Напишите программу, которая преобразует первую букву каждого
// слова в предложении в верхний регистр. Например, для предложения "hello
// world" результатом должна быть строка "Hello World".

let sentence:string[] = 'hello world'.split(" ");

for (let i: number = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].substr(1);
    sentence.toString()
}
console.log(sentence);

