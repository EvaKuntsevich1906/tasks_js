// На входе статичный объект, включающий такие ключи как name, age, birthday,
// значения ключей – пустые строки. Считать данные с клавиатуры и заполнить
// объект соответствующими данными. Добавить проверки на ввод

const obj = {
    name: "",
    age: "",
    birthday: "",
}

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
