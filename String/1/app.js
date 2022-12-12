// Ввести строку. Если эта равна “hschool”, вывести true.
//  В противном случае false. 

let str = prompt("Введите строку")

if (typeof(str) === "string") {
    console.log("Это строка") 
   if  (str === "hschool")  {
    console.log(true) 
   }  else console.log(false);
} else  {
    alert("Значение не яляется строкой")
}