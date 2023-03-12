// Реализуйте класс Hashtag. В него передается число n – количество элементов
// массива. На основании числа формируется динамический массив из n элементов
// внутри класса. Создать функцию doHashtag, заполняющую новый массив из
// элементов, каждое значение которого имеет вид #name


class Hashtag {
    constructor(n) {
        this.n = n;
    }
    doHashtag() {
        try {
            if (this.n === 0) throw new Error("Массив не имеет никакого количества элементов") 
            let arr = [];
            for (let i = 0; i < this.n; i++) {
                arr.push(prompt("Введите какую-нибудь строку"));
            }
            const tag = "#";
            let tagMap = arr.map(el => tag + el);
            alert(tagMap)
        } catch (err) {
            alert(err.message)
        }
    }
}
const count = +prompt("Введите количество элементов массива")
const haschtag = new Hashtag(count);
console.log(haschtag.doHashtag());

