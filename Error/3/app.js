// Дана строка массива чисел. Необходимо спарсить строку. Если же после того как
// вы спарсили данные у вас не массив – бросить исключение. Добавить проверку
// на числа. Далее вывести только те числа, которые кратны 3

let arr = JSON.parse(`[1,2,3,4,5,6,7,8,9, "прпа"]`);

function validator(arr_) {
    if (!Array.isArray(arr_)) throw new Error("Это не массив");
    for (let i = 0; i < arr_.length; i++) {
        if (isNaN(arr[i])) throw new Error(" В массиве есть строковое значение")
    }
}

function checking(arr_) {
    try {
     (validator(arr_))
      return arr_.filter((el) => el % 3 == 0) 
    } catch (err) {
        return err.message;
    }
}

let result = checking(arr);

console.log(result);