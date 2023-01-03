//Анаграмма
//Анаграммы – это слова, у которых те же буквы в том же количестве, 
// но они располагаются в другом порядке.


let str1 = prompt().toLowerCase();
let str2 = prompt().toLowerCase();

if (str1.length != str2.length) {
    alert("Это не анограммы, потому что у анограмм не может быть разная длина")
} else {
    let res1 = str1.split("").sort().join("")
    let res2 = str2.split("").sort().join("")
    if (res1 === res2) {
        alert("Да, это слова-анограммы")
    } else {
        alert("Эти слова не являются анограммами")
    }
}