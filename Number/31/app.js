// Две старушки идут навстречу друг другу с постоянными скоростями V1
// и V2 км/ч. Определите, через какое время старушки встретятся, если расстояние 
// между ними равно S км.

const First = +prompt(`Введите скорость`);
const Second = +prompt(`Введите скорость`);
const way = +prompt(`Введите путь`);

console.log(`Время встречи равно ${way / (First + Second)}`);