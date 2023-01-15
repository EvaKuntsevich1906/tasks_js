// На входе строка в виде пароля. 
// Необходимо написать функцию на
//  проверку, что
// пароль является надежным 
// (содержит хотя бы 1 букву в 
// большом регистре, числа,
// буквы, символ, длина не менее 
// 8 символов)

let pincode = prompt("А ну давай сюда пароль");

const checkPincode = (pincode) => {
    const pincodeArray = pincode.split("");
    if (pincodeArray.length > 8) {
        const UpperFiltered = pincodeArray.filter(el => {
            (el === el.toUpperCase()) ? true: false;
        })
        if (UpperFiltered) {
            let arrNumber = []
            const NumFiltered = pincodeArray.filter(el => {
                (el == !isNaN(el)) ? arrNumber.push(el) : null;
                
            })
            if (arrNumber.length > 0) {
                console.log("Пароль введен успешно");
            }
        }
        return true 
    } else {
        console.log("Некорректно введены данные")
        return false
    }    
}

const result = checkPincode(pincode);