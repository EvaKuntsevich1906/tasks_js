// На вход программе подается число n – количество собачьих лет. Напишите 
// программу, которая вычисляет возраст собаки в человеческих годах

let years = +prompt(`Введите число собачьих лет`);

if (years <= 0) {
    alert(`Собаке еще не исполнился 1 год`);
} else if (years <= 2) {
    alert(10.5 * years);
} else {
   alert(21 + ((years - 2) * 4));
}