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
// "id": 1
// }`
// Необходимо осуществить удаление по id. Если совпадения нет – ошибка. Добавить
// проверки

class ServerDelete {
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
        const arrFilter = array.filter(el => el.id != object.id)
        return arrFilter
    }
}

const object = JSON.parse(`{ "id": 1}`);

const serverDelete = new ServerDelete(object);
console.log(serverDelete.middleware(object));
