import { isPalindrome, calculateFactorial , capitalizeString, flattenArray} from "./app";


describe("Группа тестов задача 1 ", () => {
    test("Проверка на строку", () => {
        const res = isPalindrome(123);
        expect(res).toBe("Это число, а не строка")
    })

    test('Успешно', () => {
        const res = isPalindrome("HAH");
        expect(res).toBe(true)
    });

    test("Проверка на пустоту", () => {
        const res = isPalindrome("");
        expect(res).toBe("Слово-палиндром отсутствует")
    });

    test("Проверка на палиндром", () => {
        const res = isPalindrome("qwerty");
        expect(res).toBe(false)
    })
}
);

describe("Группа тестов задача 2 ", () => {

    test('Успешно', () => {
        let res = calculateFactorial('str');
        expect(res).toBe("Это не число")
    });

    test("Проверка на отрицательные значения", () => {
        const res = calculateFactorial(-5);
        expect(res).toBe("Это отрицательное число")
    });

    test("Успешно", () => {
        const res = calculateFactorial(5);
        expect(res).toBe(120)
    });
}); 

describe("Группа тестов задача 3", () => {

    test('Успешно', () => {
        let res = capitalizeString('str str str');
        expect(res).toBe("Str Str Str ")
    });

    test("Проверка на множество слов", () => {
        const res = capitalizeString("S");
        expect(res).toBe("Строка обязательно должна состоять из нескольких слов")
    });

    test("Проверка на длину", () => {
        const res = capitalizeString('');
        expect(res).toBe("Строка отсутствует")
    });
}); 

describe("Группа тестов задача 4", () => {

    test('Успешно', () => {
        let res = flattenArray([[1,2,4], [1,2,3], [1,2,3]]);
        expect(res).toEqual([1,2,4,1,2,3,1,2,3])
    });

    test("Проверка на длину массива", () => {
        const res = flattenArray([]);
        expect(res).toBe("Массив пуст");
    });

    test("Проверка на тип данных (массив или нет)", () => {
        const res = flattenArray('stroka1');
        expect(res).toBe("Это не массив")
    });
}); 