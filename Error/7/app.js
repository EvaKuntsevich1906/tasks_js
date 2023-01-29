// Реализуйте функцию, которая принимает число и возвращает возвенную в
// квадрат каждую цифру числа соединяя их. Добавить проверки
// 9119 -> 811181 (9
// 2 === 81, 1
// 2=== 1)

let el = prompt(`Введите элемент`);

function doSquare(el_) {
    try {
        let arr = el_.split("");
        let arrMap =  arr.map((el) => el ** 2); 
        return arrMap.join("")
    } catch (err) {
        return err.message
    }
}

let result = doSquare(el)
console.log(result);