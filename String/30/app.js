//На вход подается строка. Необходимо вывести количество гласных 
// исходной строки. Гласными являются «a», «e», «i», «o», «u». Добавить проверки на 
// 

let str = prompt().toLowerCase(); 
let arr = str.split("");
    let count = 0;
for (let i = 0; i<arr.length; i++) {
    if (arr[i] == "a" ||arr[i] == "e"|| arr[i] == "i" || arr[i] == "о"|| arr[i] == "y"){
        count +=1
    }
}
 (count>0) ? alert(`Количество гласных: ${count}`) : alert("Нет гласных")