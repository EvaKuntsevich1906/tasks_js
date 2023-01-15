// Работа с замыканием. Реализуйте функцию, которая будет считать количество
// своих вызовов

function wrapFunction() {
    let count = 1; 
    return function () {
       return count ++
    }
}
let  counter = wrapFunction()

alert (counter())
alert (counter())
alert (counter())
alert (counter())
alert (counter())
alert (counter())
