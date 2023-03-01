// Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
//     замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
//     если слова являются анаграммами. Добавить проверки на ввод.

class Anagram {
    
    constructor(firstword, twoword) {
        this.firstword = firstword;
        this.twoword = twoword;
    }

    checkAnogram() {
        try{
            if (!isNaN(this.firstword) || !isNaN(this.twoword)) throw new Error ("Введены не слова")
            if (this.firstword.split("").sort().join("") === this.twoword.split("").sort().join(""))
            return true
        } catch (err) {
            alert(err.messange)
        }
    }
}
const anogram = new Anagram(`конус`, `сукно`);

console.log(anogram.checkAnogram());