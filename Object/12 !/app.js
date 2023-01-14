// На входе пустой объект, массив, n – количество элементов массива. Далее 
// производится заполнение массива с клавиатуры. Добавить в объект ключ “sum”, 
// значение – сумма элементов массива(reduce). Добавить проверки на ввод чисел


const obj = {}


 let nameT = prompt(`Введите имя`);
 let ageT = prompt(`Введите возраст`);
 let birthdayT = prompt(`Введите день рождения`);

if (isNaN(nameT) && !isNaN(ageT) && isNaN(birthdayT)) {
  obj.name = nameT;
  obj.age = ageT; 
  obj.birthday = birthdayT;
  console.log(obj) 
} else {
    console.log("Данные введены некорректно");
}
