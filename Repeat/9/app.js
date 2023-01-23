// Продемонстрируйте пример рекурсии
// Рекурсия – это приём программирования, полезный в ситуациях, когда задача может быть
//  естественно разделена на несколько аналогичных, но более простых задач

// пример возведения в степень числа a, иначе говоря умножает само  на себя число b раз

function recurs(a, b) {
    if (b == 1) {
        return a
    }
    return a * recurs(a, b - 1);
}
console.log(recurs(2,3));