// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести итоговую стоимость на складе.
// Итоговая стоимость = количество * цена + ...

interface iStorage4 {
    id: number;
    title: string;
    count: number;
    price: number;
};

let arrapp4: iStorage4[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]

const sumStorage = ((arrapp4: iStorage4[]): number => {
    let summa: number= arrapp4.reduce((sum: number, object:iStorage4) => object.count * object.price + sum, 0);
    return summa
}); 

const result4:number = sumStorage(arrapp4)

console.log(result4);