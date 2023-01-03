//Если в строке все символы уникальные, то true, 
// в противном случае false



let str1 = prompt();
let str2 = new Set (str1)

(str1 === str2 ) ? alert(true): alert(false)

