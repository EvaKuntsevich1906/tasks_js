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
    const symbols = `!"№;%:?*()_+/,#$^&-[]{}":;'.,`
    if (pincodeArray.length > 8) {
        const UpperFiltered = pincodeArray.filter(el => {
            return el === el.toUpperCase()
        })
        if (UpperFiltered.length > 0) {
            const NumFiltered = pincodeArray.filter(el => {
                return el == !isNaN(el)
            })
            if (NumFiltered.length > 0) {
                const SymbolFiltred = pincodeArray.filter(el => {
                   return symbols.split("").includes(el)
                })
                if (SymbolFiltred.length > 0) {
                    return console.log("Пароль введен успешно")
                } else return console.log("В пароле должен быть спец символ")
            }
            return console.log("В пароле должна быть хотя бы одна цифра")
        }
        else console.log("В пароле должна быть хотя бы 1 заглавная буква");
    } else {
        console.log("Недостаточно символов")
    }
}
const result = checkPincode(pincode);