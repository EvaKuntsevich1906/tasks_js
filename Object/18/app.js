// Массив объектов прошлого слайда – воображаемая база данных (БД)
// 3. Update и Delete в задаче 18 и 
// На входе объект вида
// {"id" , "test" , "label": "Test", "category": "test", "priority": 1 },
// Необходимо найти id клиента в массиве БД.
// Если совпадение есть, произвести обновление значений для соответствующих
// ключей.

const db = [{
    "id": "test",
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
];


const clientObj = {"id" : "test" , "label": "Test", "category": "test", "priority": 1 }; 

const dbfilter = db.filter(el => (el.id !== clientObj.id));

(db.length !== dbfilter.length) ? dbfilter.push(clientObj) :  (Error)
console.log(dbfilter);

// Примечание: для удаления объекта в БД можно отфильтровать объект БД не
// включая id клиента. В результативный массив запушить клиентский, тем самым
// обновить объект БД
// Если совпадения по id нет – ошибка


// 4. Delete
// Удаление объекта из массива по id
// Примечание: для удаления объекта в БД можно отфильтровать объект БД не
// включая id клиента
// Если совпадения по id нет – ошибка 

const deleteID = db.filter(el => (el.id !== clientObj.id))
console.log(deleteID);