// Реализуйте класс ServerPut. Обязательными функциями считаются функции
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
// "id": 1, "name": "Test", "age": 1
// }`
// Необходимо найти id клиента в массиве БД. Если совпадение есть, произвести
// обновление значений для соответствующих ключей.
// Если совпадения по id нет – ошибка. Добавить проверки

class ServerPut {
    middleware(object) {
        try {
            if (object.length === 0) throw new Error("Объект пустой")
            return this.controller(object)
        } catch (err) {
            alert(err.message)
        }
    }
    controller(object) {
        return this.service(object)
    }

    service(object) {
        return this.repository(object)
    }

    repository(object) {
        let array = [{
                "id": 1,
                "name": "Yesenia",
                "age": 22
            },
            {
                "id": 2,
                "name": "Hanna",
                "age": 22
            },
            {
                "id": 3,
                "name": "Stanislau",
                "age": 25
            },
            {
                "id": 4,
                "name": "German",
                "age": 18
            },
            {
                "id": 5,
                "name": "Maria",
                "age": 27
            }
        ]
        const arrmap = array.map(el => {
            if (el.id === object.id) el = object
            return el
        })
        return arrmap
    }
}

const object = JSON.parse(`{"id": 3, "name": "Test", "age": 1 }`);

const serverPut = new ServerPut(object);
console.log(serverPut.middleware(object));
