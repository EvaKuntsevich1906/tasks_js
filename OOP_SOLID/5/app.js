// Реализуйте класс ServerPost. Обязательными функциями считаются функции
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
// "name": "Test", "age": 1
// }`
// Необходимо добавить в массив БД объект только в том случае, если нет совпадений
// по name. Если совпадения нет, то в объект клиента добавить ключ id с последним
// возможным уникальным id БД, таким образом, чтобы в БД был запушен объект вида
// {"id": 6, "name": "Test", "age": 1}
// Если совпадение есть – ошибка. Добавить проверки 

class ServerPost {

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
        const array = [{
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
        const arrayFiltered = array.filter(el => el.name === object.name);
        if (arrayFiltered.length === 0) {
            array.push({
                "id": array.length + 1,
                ...object
            })
        } else {
            throw new Error("Объект с таким name уже есть")
        }
        return array
    }
}

const object = JSON.parse(`{"id": 6, "name": "Eva", "age": 1}`);

const serverPost = new ServerPost(object)
console.log(serverPost.middleware(object));