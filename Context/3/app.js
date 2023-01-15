// Напишите функцию, которая принимает почту и возвращает объект, вида
// {
// email,
// active: true / false
// }
// true, если почта содержит @, .com / .ru. False в противном случае


const mail = prompt("Введите адрес эл почты");

const priem_priem = (mail) => {
    const obj = { }
    obj.email = mail;
    if (mail.includes("@") && ((mail.includes("ru")) || (mail.includes("com")))) {
        obj.active = true
        return obj
    } else {
        obj.email = mail;
        obj.active = false;
    }
    return obj;
}

const res = priem_priem(mail);
console.log(res);