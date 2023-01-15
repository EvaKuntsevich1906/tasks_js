// Работа с замыканием. Реализуйте функцию, которая будет считать количество
// своих вызовов
let concat = "hanna"; 

function wrapFunction() {
    return function () {
       concat = concat+" pleshko"
        return concat
    }
}
let  counter = wrapFunction()

alert (counter())
alert (counter())
alert (counter())
alert (counter())
alert (counter())
alert (counter())


const zamfunc = () => {
    concat = concat+
    return zamfunc()
}