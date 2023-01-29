// На входе массив значений. Необходимо его обработать. Если в массиве есть хотя
// бы 1 строка, бросить исключение. 

let arr = [1, 2, 3, 4, 5, 6, "оацлора"];

function checking(arr_) {
    try {
        for (let i = 0; i < arr_.length; i++) {
            if (isNaN(arr_[i])) throw new Error(`В массиве есть строки`);
        }
        return true
    } catch (err) {
        return err.message
    }
}

let res = checking(arr)
console.log(res);