// Вычислите сумму массива целых чисел статичного массива используя рекурсию

let arr = [2,1.1, 2.1, 3.1, 4,8];

function recurs(arr, counter, sum) {
  if (counter === undefined) {
    sum = 0
    counter = arr.length
  }
  if (Number.isInteger(arr[counter])) {
    sum += arr[counter]
  }

  if (counter === 0) return (sum)
  return recurs(arr, counter - 1, sum)
}
console.log(recurs(arr))