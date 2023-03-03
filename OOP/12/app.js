// Реализуйте класс Hashtag. В него передается число n – количество элементов
// массива. На основании числа формируется динамический массив из n элементов
// внутри класса. Создать функцию doHashtag, заполняющую новый массив из
// элементов, каждое значение которого имеет вид #name

class Hashtag {
    constructor(n) {
        this.n = n;
    }

    doHashtag(n) {
        try {
            const arr = [];
            for (let i = 0; i < n; i++) {
                arr.push(prompt("Введите элемент"));
            }
            const tag = `#`
            let tagMapArr = arr.map(el => tag+el)
            alert(tagMapArr)
        } catch (err) {
            alrt(err.message)
        }
    }
}

const n = prompt("Введите количество элементов массива");

const hashtag = new Hashtag();
console.log(hashtag.doHashtag(n));