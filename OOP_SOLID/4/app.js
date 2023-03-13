// Реализуйте класс ServerById. Обязательными функциями считаются функции
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
// "id": 1
// }`
// Необходимо вывести в консоль найденный элемент массива по id если таковой
// имеется. В противном случае бросить исключение. Добавить проверки


class ServerById {
    middleware(object) {
        try {
            if (object.length === 0) throw new Error("Объект пуст")
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
        const arrayFilt = array.filter(el => object.id === el.id);
        if (arrayFilt.length === 0) throw new Error("Объекта с таким id не существует")
        return arrayFilt
    }
}


const object = JSON.parse(`{"id": 1}`);

const serverById = new ServerById();
console.log(serverById.middleware(object));