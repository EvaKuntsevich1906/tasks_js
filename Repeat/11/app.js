// Напишите функцию, которая при каждом вызове своего возвращаемого значения
// будет генерировать и возвращать рандомное число

function generateRandomNumber(f) {
  let randomVal = (Math.floor(Math.random() * 1000));
  return randomVal
}
let result = generateRandomNumber()
console.log(result);