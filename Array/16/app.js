// Массив. Из него создать еще 2 массива.
//  В оном только четные, в другом нечетные»


let arr = [1,2,3,4,5,6,7,8,9,10]

let chet = []
let nechet = []

for ( let i = 0; i<arr.length; i++) {
    if (arr[i]%2 == 0) {
        chet.push(arr[i])
    }else {
        nechet.push(arr[i])
    }
}
alert(chet)
alert(nechet)