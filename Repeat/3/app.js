// Написать функцию которая принимает массив стирок и возвращает
// конкатенацию. Добавьте функцию проверки

let arr = ["я", 6, "очень", "люблю", "JavaScript", ];

//declaration
function toConcatDecl(arr_) {
    let counter = ""
    for (let i = 0; i < arr_.length; i++) {
        if (isNaN(arr[i])) {
            counter += arr_[i]
        }
    }
    return counter
}
console.log(toConcatDecl(arr));