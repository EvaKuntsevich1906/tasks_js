// Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true, если можно построить треугольник со
// сторонами заданной длины, и false в любом другом случае. Треугольник
// существует только тогда, когда сумма двух его сторон больше третьей. Требуется
// сравнить каждую сторону с суммой двух других. Если хотя бы в одном случае
// сторона окажется больше либо равна сумме двух других, то треугольника с
// такими сторонами не существует.


let a = prompt(`Введите сторону A`);
let b = prompt(`Введите сторону B`);
let c = prompt(`Введите сторону C`);


function createFigure(a, b, c) {
    try {
        if ((a + b > c) && (b + c > a) && (a + c > b)) {
            return true
        }
        throw new Error("Треугольника с такими сторонами существовать не может")
    } catch (err) {
        return err.message
    }
}

let result = createFigure(a, b, c);
console.log(result);