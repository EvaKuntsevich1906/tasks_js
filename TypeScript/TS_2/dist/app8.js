// Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.
let arrapp8 = ["max", "xam", "eva", "hanna", "jul", "js"];
let count8 = 1;
for (let i = 0; i < arrapp8.length; i++) {
    let count8 = 1;
    (arrapp8[i] == arrapp8[i].split("").reverse().join("")) ? count8 += 1 : count8 += 0;
}
;
(count8 > 1) ? console.log("Палиндромы есть") : ("Палиндромов нет");
