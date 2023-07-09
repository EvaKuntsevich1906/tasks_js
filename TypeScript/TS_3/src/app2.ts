// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары в обратном порядке 


interface iStorage2 {
    id: number;
    title: string;
    count: number;
    price: number;
};

let arrapp2: iStorage2[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]

const reverseStorage = ((arrapp2: iStorage2[]): iStorage2[] => {
    let reverseArrayStorage: iStorage2[] = arrapp2.reverse()
    return reverseArrayStorage
})

const result2 = reverseStorage(arrapp2);
console.log(result2);
