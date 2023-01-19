// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает количество пар ключ / значение. IIFE

let obj = {
   value_1: "value_1",
   2: "value_2",
   value_3: "value_3",
   4: "value_4",
   value_5: "value_5",
   6: "value_6"
}

function doCounter (obj_) {
    let count = 0
    for (let key in obj_) {
        count += 1
    }
    return count;
};

let res_call = doCounter(obj)
console.log(res_call);