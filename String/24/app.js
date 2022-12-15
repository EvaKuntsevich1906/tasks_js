// На вход программе подается строка генетического кода, состоящая из букв 
// А (аденин), Г (гуанин), Ц (цитозин), Т (тимин). Напишите программу, которая 
// подсчитывает сколько аденина, гуанина, цитозина и тимина входит в данную 
// строку генетического кода.

let bio = prompt("Генетический код").toLowerCase();

let adenin = bio.split("а").length - 1;
let guanin = bio.split("г").length - 1;
let citozin = bio.split("ц").length - 1;
let timinin = bio.split("т").length - 1;

console.log(`Аденин: ${adenin}`);
console.log(`Гуанин: ${guanin}`);
console.log(`Цитозин: ${citozin}`);
console.log(`Тимин: ${timinin}`);