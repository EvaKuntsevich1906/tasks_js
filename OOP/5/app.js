// Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
//     замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
//     если слова являются анаграммами. Добавить проверки на ввод.


class Anagram {
    constructor(word1, word2) {
        this.word1 = word1;
        this.word2 = word2;
    }

    check() {
        try {
            if (!isNaN(this.word1) || (!isNaN(this.word2))) throw new Error("Введены числа, а не слова");
            if (this.word1.split("").sort().join("") === this.word2.split("").sort().join("")) {
                alert("Да, эти слова анограмьы")
            } else {
                alert("Нет, это не анограммы")
            }
        } catch (err) {
            alert(err.message)
        }
    }
}

const anogram = new Anagram(prompt("Введите первое слово"), prompt("Введите второе слово"))
console.log(anogram.check());
