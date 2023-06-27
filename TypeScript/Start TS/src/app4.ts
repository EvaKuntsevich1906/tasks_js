// . Создайте переменную grade и присвойте ей значение от 1 до 5. Используя
// оператор switch, выведите в консоль описание оценки (например, "Отлично",
// "Хорошо" и т.д.) в зависимости от значения переменной grade.

let grade: number = +prompt("Введите оценку");

switch (grade) {
    case 1: alert("Очень плохо");
        break;
    case 2: alert("Плохо");
        break;
    case 3: alert("Нормально");
        break;
    case 4: alert("Хорошо");
        break;
    case 5: alert("Отлично");
        break;
    default: alert("Введите оценку от 1 до  5");
        break;
}
