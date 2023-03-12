// Реализуйте класс MathСalculation. В него передается число n – количество
// элементов массива. На основании числа формируется динамический массив из n
// элементов внутри класса. Создать функцию для подсчета всех четных чисел
// массива. Добавить проверки на ввод

class MathCalculation {
    constructor(n) {
        this.n = n;
    }
    
    corrected() {
        if (isNaN(this.n)) throw new Error("Введите число ( количество элементов первонач. массива");
        return true
    }

    formation() {
        try {
            this.corrected();
            let arr = [];
            let sum = 0;
            for (let i = 0; i < this.n; i++) arr.push(Math.floor(Math.random() * 100));
            for (let i = 0; i < arr.length; i++) {
                (arr[i] % 2 === 0) ? sum += arr[i] : null
            }
            return alert(`Массив : ${arr}, четные  числа (сумма) ${sum}`)
        } catch(err) {
            alert(err.message)
        }

    }
}

const mathCalculation = new MathCalculation(8);
console.log(mathCalculation.formation());


