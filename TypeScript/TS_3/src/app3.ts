// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести только те товары из положения, количество которых внутри массива
// кратно 3


interface iStorage3 {
    id: number;
    title: string;
    count: number;
    price: number;
};

let arrapp3: iStorage3[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]

const multiplyStorage = ((arrapp3: iStorage3[]): iStorage3[] => {
    let arrfilter3: iStorage3[] = arrapp3.filter((object: iStorage3) => {
        if (object.count % 3 === 0) {
            return object
        }
    })
    return arrfilter3
})

const result3: iStorage3[] = multiplyStorage(arrapp3)

console.log(result3);