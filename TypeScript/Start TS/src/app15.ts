// Напишите программу, которая принимает строку и возвращает новую строку, в
// которой каждое слово заменено на последнюю букву этого слова, а все остальные
// символы остаются без изменений.
// "Hello World" -> "o d“

let string15:string[]= 'Hello World'.split(' ');

for (let i:number = 0; i<string15.length; i++) {
    console.log(string15[i][string15[i].length-1]);
}