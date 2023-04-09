// Посчитать количество гласных и согласных в строке


const str = "privetik".split("");

function checkStr(str) {
    let glas = 0;
    for (let i = 0; i < str.length; i++) {
        if ((str[i] === "o") || (str[i] === "a") || (str[i] === "a" || (str[i] === "y") || (str[i] === "e") || (str[i] === "y"))) {
            glas = glas += 1;
        }
        glas
    }
    let soglas = str.length - glas;
    return `кол-во гласных - ${glas}, кол-во согласных = ${soglas}`
}


console.log(checkStr(str));