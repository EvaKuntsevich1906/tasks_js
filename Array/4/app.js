// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = []
let res = ""
for ( let i = 0; i<arr.length; i++) {
     if(!isNaN(arr[i])) {
        newArr.push(arr[i]+"-")
     }
}
res = newArr.toString().replaceAll(",","")
alert(`-${res}`)