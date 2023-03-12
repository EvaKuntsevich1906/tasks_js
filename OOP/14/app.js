// 4. Реализуйте класс ServerPut. Обязательными функциями считаются функции
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
// {"id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1
// }`
// Необходимо найти id клиента в массиве БД. Если совпадение есть, произвести
// обновление значений для соответствующих ключей.
// Если совпадения по id нет – ошибка. Добавить проверки

class ServerPut {
    middleware(object) {
        if (object.length === 0) throw new Error("Объект пуст")
        return this.controller(object)
    }

    controller(object) {
        return this.service(object)
    }

    service(object) {
        return this.repository(object)
    }

    repository(object) {
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
        ]
        const arrFiltered = arr.filter(el => el.id != object.id);
        if (arrFiltered.length === arr.length) throw new Error('Такого id не найдено');
        arrFiltered.push(object);
        return arrFiltered;
    }
}


const object = {
    "id": "javascript",
    "label": "JavaScript",
    "category": "programmingLanguages",
    "priority": 1
}

const serverPut = new ServerPut();
console.log(serverPut.controller(object))