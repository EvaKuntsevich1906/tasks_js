// Реализуйте класс ServerDelete. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": "javascript"
// }`
// Необходимо осуществить удаление по id. Если совпадения нет – ошибка. Добавить
// проверки

class ServerDelete {

    middleware(obj) {
        if (obj.length === 0) throw new Error(`Объект пустой`);
        return this.controller(obj);
    }

    controller(obj) {
        try {
            return this.service(obj)
        } catch (err) {
            alert(err.message)
        }
    }

    service(obj) {
        return this.repository(obj)
    }

    repository(obj) {
        const arr = [{
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
        ];

        let arrFilter = arr.filter(el => el.id != obj.id);
        if (arrFilter.length === arr.length) throw new Error('Такого id не найдено');
        return arrFilter;
    }
}

let obj = JSON.parse(`{ "id": "javascript" }`);


const serverDelete = new ServerDelete();
console.log(serverDelete.controller(obj))