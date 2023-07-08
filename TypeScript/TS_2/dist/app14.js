// Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.
let strapp14 = "hannaevajulaistasmax".split("");
let resultobject = {};
for (let i = 0; i < strapp14.length; i++) {
    if (resultobject.hasOwnProperty(strapp14[i])) {
        resultobject[strapp14[i]] += 1;
    }
    else {
        resultobject[strapp14[i]] = 1;
    }
}
let valueapp14 = Object.values(resultobject);
let maxvalue = Math.max(...valueapp14);
for (let key in resultobject) {
    if (resultobject[key] === maxvalue) {
        console.log(key);
        break;
    }
}
console.log(maxvalue);
