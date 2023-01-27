// каррирование

// function primer (c) {
//     return (v) => {
//         return (e) => {
//             return c + v + e 
//         }
//     }
// }
// console.log(primer(4)(6)(5));

// Необходимо реализовать замыкание, 
// которое при каждом вызове функции будет
//  выводить рандомно генерированное значение
//   от 0 до 100

function primer() {
    return (a) => {
        console.log(Math.floor(Math.random() * 100));
    }
}

const finnaly = primer();
finnaly()
finnaly()
finnaly()
finnaly()
