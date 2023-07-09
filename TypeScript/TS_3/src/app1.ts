// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10

interface iStorage {
    id: number;
    title: string;
    count: number;
    price: number;
};

let arrapp1: iStorage[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]

const getStorageByCount = (arrapp1: iStorage[]): iStorage[] => {
    let arrfilter: iStorage[] = arrapp1.filter((object: iStorage) => {
        if (object.count > 10) {
            return object
        }
    })
    return arrfilter
}

const result1: iStorage[] = getStorageByCount(arrapp1)

console.log(result1);
