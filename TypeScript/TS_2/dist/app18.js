// Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)
let arrayobj18 = [
    { id: 1, author: "Булгаков", title: "Мастер и Маргарита" },
    { id: 2, author: "Пушкин", title: "Капитанская дочка" },
    { id: 3, author: "Тургенев", title: "Отцы и дети" },
    { id: 4, author: "Толстой", title: "Война и Мир" },
];
let filterarrapp18 = arrayobj18.filter((el) => {
    if (el.author == "Булгагов") {
        return el;
    }
});
console.log(...filterarrapp18);
