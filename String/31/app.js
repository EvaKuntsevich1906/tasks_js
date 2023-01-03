//Развернуть строку не используя reverse


let firststr = prompt();
// Переворот строки с помощью цикла for 

let twostr = "";

for (let i = firststr.length - 1; i>=0; i--) {
    twostr += firststr[i]
}
alert(twostr)

