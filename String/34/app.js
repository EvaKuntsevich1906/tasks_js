//Необходимо посчитать все согласные в строке4


let str = prompt().toLowerCase();

let arrstr = str.split("");
let counter = 0; 

for (let i = 0; i<arrstr.length; i++) { 
    if (arrstr[i] != "a" && arrstr[i] != "e" && arrstr[i] != "o" && arrstr[i] != "u" && arrstr[i] != "y"  ) {
        counter += 1; 
}
}
alert (`Количество согласных в введенной строке ${str} равняется ${counter}`)
