// На входе значение. Необходимо его обработать. Если это число и оно не является
// четным, бросить исключение

let value = prompt(`Введите какое-либо значение`);

function сheckValue(value_) {
    try {
        if (isNaN(value))   throw new Error("Это не число");
    
        if (value % 2 !== 0)  throw new Error(`Это число, но оно не является четным `)
      
        return true
    } catch (err) {
        return err.message
    }
}
let res = сheckValue(value);
console.log(res);