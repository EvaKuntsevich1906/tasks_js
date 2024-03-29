// 7. Реализуйте класс ServerById. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": "javascript"
// }`
// Необходимо вывести в консоль найденный элемент массива по id если таковой
// // имеется. В противном случае бросить исключение. Добавить проверки 


class ServerById {
    middleware() {
        if (object.length === 0) throw new Error(`Объект пустой`);
        return this.controller(object);
    }
    controller() {
        const data = this.service(object)
        return data
    }

    service() {
        const data = this.repository(object)
        return data
    }

    repository(object) {
        try {
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
            const arrFiltered = arr.filter(el => el.id === object.id);
            if (arrFiltered.length == 0) throw new Error("Такого id не найдено");
            return arrFiltered
        } catch (err) {
            alert(err.message)
        }
    }
}
const object = {
    "id": "javascripet"
}

const serverById = new ServerById();
console.log(serverById.controller(object));
