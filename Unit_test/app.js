// Написать функцию которая принимает 2 числа и возводит 1 во 2 степень.
// Добавить необходимые проверки.
// Написать тест для функции

const stepen = (a, b) => {
    try {
        if (isNaN(a) && isNaN(b)) throw new Error("Вы передаете не числа");
        if (a < 0 && b < 0) throw new Error("Числа не могут быть отрицательными")
        return a ** b
    } catch (err) {
        return err.message
    }
}

// Написать функцию которая принимает 2 числа и возвращает результат
// произведения 2 множителей. Добавить необходимые проверки.
// Написать тест для функции

const proizvedenie = (a, b) => {
    try {
        if (isNaN(a) && isNaN(b)) throw new Error("Вы передаете не числа");
        if (a === 0 || b === 0) throw new Error("Нельзя умножать на ноль")
        return a * b
    } catch (err) {
        return err.message
    }
};

// Написать функцию которая принимает массив чисел и находит сумму всех
// элементов. Добавить необходимые проверки.
// Написать тест для функции

const sumelementsinarr = (arr) => {
    try {
        if (!Array.isArray(arr)) throw new Error('это не массив');
        if (arr.length == 0) throw new Error('массив пуст');
    } catch (err) {
        return err.message;
    }
};


//У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10 и произведены в Германии
// Написать тест для функции 

function findProduct(arr) {
    try {
        if (!Array.isArray(arr)) throw new Error('это не массив');
        if (arr.length == 0) throw new Error('массив пуст');
        let arrFilter = arr.filter(el => el.count > 10 && el.producer == 'Германия')
        return arrFilter;
    } catch (err) {
        return err.message
    }
}

// У вас есть массив строковых значений, состоящий из номеров телефонов.
// Необходимо вывести значения массива без дубликатов. Добавить необходимые
// проверки.
// Написать тест для функции

const findUniqPhoneNumber = (arr) => {
    try {
        if (!Array.isArray(arr)) throw new Error('это не массив');
        if (arr.length == 0) throw new Error('массив пуст');
        let uniqNumbers = [...new Set(phoneArray)];
        // const uniqNumber = Array.from(new Set(phone));
        return uniqNumbers;       
    } catch (err) {
        return err.message
    }
}

module.exports = {
    stepen,
    proizvedenie,
    sumelementsinarr,
    findProduct,
    findUniqPhoneNumber
};