// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом
;
let arrapp5 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
const findMaxPriceInStorage = ((arrapp5) => {
    let arrayOfPrices = arrapp5.map((el) => el.price);
    let maxPrice5 = Math.max(...arrayOfPrices);
    return arrapp5.filter((el) => el.price === maxPrice5);
});
console.log(...findMaxPriceInStorage(arrapp5));
