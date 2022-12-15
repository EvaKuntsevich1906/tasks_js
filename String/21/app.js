// На вход программе подается строка. Напишите программу, которая меняет 
// регистр символов, другими словами замените все строчные символы 
// заглавными и наоборот.


let str = prompt();
let strsplit = str.split("");
let rez = ""

for (let i = 0; i < strsplit.length; i++) {
    if (strsplit[i][0] === strsplit[i][0].toLowerCase()) {
        rez += strsplit[i].toUpperCase()
    } else{
    rez +=  strsplit[i].toLowerCase()
    }
}

alert(rez)
