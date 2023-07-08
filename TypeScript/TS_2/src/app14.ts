// Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.

let strapp14:string [] = "hannaevajulaistasmax".split("");

let resultobject = {};

for (let i:number = 0; i < strapp14.length; i++) {
    if (resultobject.hasOwnProperty(strapp14[i])) {
        resultobject[strapp14[i]] += 1;
    } else {
        resultobject[strapp14[i]] = 1
    }
}

let valueapp14:number[] = Object.values(resultobject);

let maxvalue:number = Math.max(...valueapp14) 

for (let key in resultobject ) {
    if(resultobject[key] === maxvalue) {
        console.log(key);
        break
    }
}


console.log(maxvalue);
