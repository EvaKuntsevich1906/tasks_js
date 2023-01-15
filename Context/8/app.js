// Напишите функцию, принимающую в качестве параметра строку. Необходимо
// оставить в строке только униакльные символы. IIFE
// Позволяеткопироватьтекстиз -> позвляеткираьс

const str = "Позволяеткопироватьтекстиз";

(function (str) {
    let uniqueValue = "";
    str.split("").forEach(el => {
       if (!uniqueValue.includes(el)) uniqueValue += el;
    })
    console.log(uniqueValue);
}(str))