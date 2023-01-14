// Массив объектов прошлого слайда – воображаемая база данных (БД)
const db = [{
    "id": "javascript",
    "label": "JavaScript",
    "category": "programmingLanguages",
    "priority": 1
  },
  {
    "id": "typescript",
    "label": "TypeScript",
    "category": "programmingLanguages",
    "priority": 1
  },
  {
    "id": "sql",
    "label": "SQL",
    "category": "programmingLanguages",
    "priority": 2
  },
  {
    "id": "java",
    "label": "Java",
    "category": "programmingLanguages",
    "priority": 3
  },
  {
    "id": "go",
    "label": "GO",
    "category": "programmingLanguages",
    "priority": 3
  }
]
// На входе объект – воображаемое тело запроса от пользователя
// Работа по CRUD: Create, Read, Update, Delete
// Использовать методы перебора массива
// Возможно применение spread оператора

// 1. Read
// Вывести в консоль массив объектов
console.log(db);

// 2. Create
// На входе объект вида
// { "label": "Test", "category": "test", "priority": 1 },
// Неоходимо запушить в БД объект только в том случае, если нет совпадений по
// label.
// Если сопадения нет, то в объект клиента добавить ключ id со значением label в
// toLowerCase таким образом, чтобы в БД был запушен объект вида
// {"id": "test" "label": "Test", "category": "test", "priority": 1 },
// Если совпадение есть – ошибка

const newlabel = {
  "label": "Test",
  "category": "test",
  "priority": 1
};

const dbfilter = db.filter(el => {  el.label == newlabel.label }); 

if (dbfilter.length === 0) {
  db.push({ id: newlabel.label.toLowerCase(0), ...newlabel})
  console.log(db);
} else {
console.log(Error);
}

// 3. Update и Delete в задаче 18 и 
// На входе объект вида
// {"id" , "test" , "label": "Test", "category": "test", "priority": 1 },
// Необходимо найти id клиента в массиве БД.
// Если совпадение есть, произвести обновление значений для соответствующих
// ключей.
// Примечание: для удаления объекта в БД можно отфильтровать объект БД не
// включая id клиента. В результативный массив запушить клиентский, тем самым
// обновить объект БД
// Если совпадения по id нет – ошибка


// 4. Delete
// Удаление объекта из массива по id
// Примечание: для удаления объекта в БД можно отфильтровать объект БД не
// включая id клиента
// Если совпадения по id нет – ошибка 