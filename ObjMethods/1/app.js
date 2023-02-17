// На входе статичный объект и строка str. Необходимо найти в объекте ключ str и
// вывести true при наличии совпадения, false в противном случае 

let obj = {}

obj = {
    id: 1,
    name: "udemy"
}
delete obj.name
obj.name = "hschool"
console.log(obj);
delete obj.name
console.log(obj);