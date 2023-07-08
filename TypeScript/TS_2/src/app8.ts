// Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.


let arrapp8:string[] = ["max", "xam", "eva","ave", "hanna", "jul", "js"]; 

let filterarrapp8:string[] = arrapp8.filter(el => (el === el.split("").reverse().join("")));
(filterarrapp8.length>=1) ? console.log("Палиндромы есть") : console.log("Палиндромов нет");