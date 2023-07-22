// 1. Напишите функцию isPalindrome(word: string): boolean, которая принимает слово
// и возвращает true, если оно является палиндромом (читается одинаково слева
// направо и справа налево), и false в противном случае.

const isPalindrome = (word: any): any => {
    try {
        if (typeof (word) !== "string") throw new Error("Это число, а не строка")
        if (!word) throw new Error("Слово-палиндром отсутствует")
        const reverseWord = word.split("").reverse().join("");
        if (reverseWord !== word) return false

        return true
    } catch (err: any) {
        return err.message
    }

}

// 2. Напишите функцию calculateFactorial(n: number): number, которая принимает
// число n и возвращает его факториал.


const calculateFactorial = (n: any): number | string => {
    try {
        if (typeof n !== "number") throw new Error("Это не число");
        if (n < 0) throw new Error("Это отрицательное число");
        const arr: number[] = [];
        let result: any = 1;
        for (let i: number = 1; i <= n; i++) {
            const el = i;
            result *= el
        }
        return result
    } catch (err: any) {
        return err.message
    }

}

// 3. Напишите функцию capitalizeString(str: string): string, которая принимает строку и
// возвращает новую строку, в которой каждое слово начинается с заглавной буквы
const capitalizeString = (str: any): string | any => {
    try {
        if (typeof (str) !== "string") throw new Error("Это не строка");
        if (!str) throw new Error("Строка отсутствует");
        if (str.length === 1) throw new Error("Строка обязательно должна состоять из нескольких слов");
        let strsplit: string[] = str.split(" ");
        let result: string = '';
        for (let i: number = 0; i < strsplit.length; i++) {
            const el = strsplit[i];
            result += el[0].toUpperCase() + el.slice(1) + ` `
        }
        return result
    } catch (err: any) {
        return err.message
    }

}

// 4. Напишите функцию flattenArray(array: any[]): any[], которая принимает массив, в
// котором могут быть вложенные массивы, и возвращает новый массив, в котором
// все элементы являются плоским списком без вложенности.
const flattenArray = (arr: any[] | any): any[] => {
    try {
        if (!Array.isArray(arr)) throw new Error("Это не массив");
        if (!arr.length) throw new Error("Массив пуст");
        let flatArr = arr.flat(Infinity);
        return flatArr;
    } catch (err: any) {
        return err.message
    }
}

// . Напишите функцию chunkArray(array: any[], size: number): any[][], которая
// принимает массив и число size, и возвращает новый массив, разделенный на подмассивы указанного размера

const chunkArray = (arr: any[] | any, size: number): any[][] => {
    if (size <= 0)   throw new Error("Размер должен быть положительным числом");
    if (!Array.isArray(arr)) throw new Error("Это не массив");
    if (!arr.length) throw new Error("Массив пуст");
    const result: any[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        const chunk = arr.slice(i, i + size);
        result.push(chunk);
    }
    return result;
};

//12 Реализуйте функцию, которая принимает в качестве параметра строку и возвращает массив без каких-либо элементов с одинаковым значением рядом друг с другом.
// Написать тест для функции
// 'AAAABBBCCDAABBB -> ['A', 'B', 'C', 'D', 'A', 'B’]
// 'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’]
// '12233’ -> [1, 2, 3]
// Написать тест для функции

const deleteDuplicates = (str: string | number): string[] => {
    if (typeof (str) !== "string") throw new Error("Неправильный тип данных. Ожидалась строка");
    if (str.length === 0) throw new Error("Введенная строка пустая");
    let result: string[] = [];
    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i] !== str[i - 1]) {
            result.push(str[i]);
        }
    }
    return result;
};



export { isPalindrome, calculateFactorial, capitalizeString, flattenArray , chunkArray, deleteDuplicates}