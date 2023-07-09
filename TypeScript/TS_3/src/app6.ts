// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов

interface iStorage6 {
    id: number;
    title: string;
    count: number;
    price: number;
};

let arrapp6: iStorage6[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]

const findMediumPriceInStorage = ((arrapp6: iStorage6[]): iStorage6[]=> {
    let arrayOfPrices:number[]= arrapp6.map((el: iStorage5) => el.price);
    let mediumPrice6:number = (Math.max(...arrayOfPrices) + Math.min(...arrayOfPrices))/2; 
    return arrapp6.filter((el:iStorage5)=>el.price === mediumPrice6)
    
    }); 
