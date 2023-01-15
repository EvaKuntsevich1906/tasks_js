// Напишите функцию, принимающую в качестве параметра строку. Необходимо
// оставить в строке только униакльные символы. IIFE
// Позволяеткопироватьтекстиз -> позвляеткираьс

let str = "Позволяеткопироватьтекстиз";


(function (str) {
let uniqueValue = [];
str.split("").forEach(el => {
    (!uniqueValue.includes(el)) ? uniqueValue.push(el) : null;
})
console.log(uniqueValue.join(""));
}(str))
