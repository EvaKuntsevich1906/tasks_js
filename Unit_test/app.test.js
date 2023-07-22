const {stepen, proizvedenie,sumelementsinarr, findProduct, findUniqPhoneNumber} = require("./app");

describe("Группировка тестов задача 1", () => {

    test("Успех", () => {
        const result =  stepen(2,2); 
        expect(result).toBe(4)
    }); 

    test("Проверка на строки", () => {
        const result =  stepen(2,"stroka"); 
        expect(result).toBe("не число")
    }); 

    test("Проверка на отрицание", () => {
        const result =  stepen(-2,-2); 
        expect(result).toBe("Числа не могут быть  отрицательные")
    }); 

});

describe("Группировка тестов задача 2", () => {

    test("Успех", () => {
        const result =  proizvedenie(3,2); 
        expect(result).toBe(6)
    }); 

    test("Проверка на строки", () => {
        const result =  proizvedenie(2,"stroka"); 
        expect(result).toBe("не число")
    }); 

    test("Проверка на умножение на 0", () => {
        const result =  stepen(2,0); 
        expect(result).toBe("Невозможно умножать на 0")
    }); 

});

describe('Группировка тестов задача 3', () => {
    test('Успешно', () => {
        const result = sumelementsinarr([10, 20, 30]);
        expect(result).toBe(60);
    })
    test('Проверка на массив', () => {
        const result = sumelementsinarr('string');
        expect(result).toBe('Это не массив');
    })

}); 

describe('Группировка тестов задача 4', () => {
    let arr = [{ id: 1, title: 'Часы', count: 10, price: 500, producer: 'Германия' },
    { id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
    { id: 3, title: 'Моноблок', count: 6, price: 2200, producer: 'Германия' },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000, producer: 'Китай' },
    { id: 5, title: 'Планшет', count: 22, price: 2100, producer: 'Китай' },
    { id: 6, title: 'Телевизор', count: 4, price: 4100, producer: 'Германия' },
    { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
    ];

    test('Успешно', () => {
        const result = findProduct(arr);
        expect(result).toEqual([{ id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
        { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }]);
        expect(result).toHaveLength(2);
        expect(result.length).toBeGreaterThan(0);
        expect(result.length).toBe(2);     //ожидаемый результат
    })

    test('Проверка на массив', () => {
        const result = findProduct('stroka');
        expect(result).toBe('Это не массив');
    })

    test('Проверка на пустоту', () => {
        const result = findProduct([]);
        expect(result).toBe('Массив пуст');

    })
});


describe('Группировка тестов задача 5', () => {
    const phoneArray = ['+375291063986', '+375291063986','+375291063986','+375291063986',
        '+3752959236695', '+27536368404987', '+395489574832', '+395489584375'];
    test('Успешно', () => {
        const result = findUniqPhoneNumber(phoneArray);
        expect(result).toEqual(['+375291063986',  '+3752959236695', '+27536368404987', '+395489574832', '+395489584375']);
        expect(result).toHaveLength(5);

    });

    test('Проверка на пустоту', () => {
        const result = findUniqPhoneNumber([]);
        expect(result).toBe('Массив пуст');

    })

    test('Проверка на массив', () => {
        const result = findUniqPhoneNumber('stroka');
        expect(result).toBe('это не массив')
    })
});

