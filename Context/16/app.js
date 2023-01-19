// *Вычислить факториал числа используя рекурсию

let number = +prompt("Введите число, у которого будет считаться факториал");

function doFact (n){
    if(n <= 1) return 1
    return n*doFact(n-1);
}

console.log(doFact(number));