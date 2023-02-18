// На входе статичный объект и строка str. Необходимо найти в объекте ключ str и
// вывести true при наличии совпадения, false в противном случае 

let obj = {
    name: "string"
}

let str = "name";

function checkKeys(obj_, str_) {
    try {
        if (!obj.hasOwnProperty(str))  {
            throw new Error("Not found")
        } else {
            alert("TRUE")
        }
    } catch (err) {
        alert(err.message)
    }
}
const result = checkKeys(obj, str)
