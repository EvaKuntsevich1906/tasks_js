// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE
const obj = {
    value_1: 1,
    value_2: "ghj",
    value_3: 3,
    value_4: "cd"
};

 const result = (function createNewObj(obj_) {
    let newObj = {}
    for (let key in obj_) {
        if (typeof obj_[key] === "number") {
            newObj[key] = obj_[key]
        }
    }
 return newObj;
}(obj));

console.log(result);