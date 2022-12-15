// На вход программе подается строка, состоящая из имени и фамилии человека, 
// разделенных одним пробелом. Напишите программу, которая проверяет, что 
// имя и фамилия начинаются с заглавной буквы.

let usernsme = prompt();
let usersplit = usernsme.split(" ");


if (usersplit[0][0] === usersplit[0][0].toUpperCase() && usersplit[1][0] === usersplit[1][0].toUpperCase()) {
    alert("Yes")
} else {
    alert("No")
}