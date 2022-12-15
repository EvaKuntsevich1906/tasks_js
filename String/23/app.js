// На вход программе подается строка. Напишите программу, которая 
// подсчитывает количество буквенных символов в нижнем регистре.

let str = prompt();
let strsplit  = str.split("");
console.log(strsplit);
let counter = 0;

for (let i = 0; i<strsplit.length; i++) {
    if (strsplit[i] === strsplit[i].toLowerCase()) {
        counter +=1
    } 
}
 alert(counter)