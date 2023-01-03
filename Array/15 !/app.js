// Есть массив. Необходимо вывести элемент, который повторяется чаще всего в массиве


const arrvalues = [1,1,1,1,1,1,1,5,30,8,16,4,8,6,4];
const duplicate = arrvalues.filter((number, index, numbers) => {
    console.log(number); // number - элемент массива
    console.log(index); // index - индекс элемента массива
    console.log(numbers); // numbers - представление массива values
    return numbers.indexOf(number) !== index;
});
