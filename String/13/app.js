//Дана строка 'я учу javascript!'. 
// 1. Найдите количество символов в этой строке. 
// 2. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice). 
// 3. Найдите позицию подстроки 'учу'.

// пункт 1

let str = "я учу javascript!"
let length = str.length;
alert (`Длина строки str = ${length}`);


// пункт 2


let strSubstr = str.substr(2);
alert(strSubstr);

let strSubstring = str.substring(2);
alert(strSubstring);

let strSlice = str.slice(2);
alert(strSlice);

