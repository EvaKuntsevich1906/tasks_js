// . Реализуйте функцию searchBinary, которая принимает 2 параметра: значение 3 и
// массив [1, 2, 3, 4, 5]. Функция возвращает индекс, где значение встречается в
// массиве, если найдено. Если значение не найдено, возвращается сообщение об
// ошибке


let value = 3;
let arrWithValue = [1, 2, 3, 4, 5, 6, 7, 8];

function searchBinary(el, arr) {
    let start = 0;
    let end = arr.length - 1;

    for (let i = start; i < end; i++) {
        let middle = Math.floor((end + start) / 2);

        if (arr[middle] == el) {
            alert(`Да, такой элемент в массиве есть, его индекс равен ${arr[middle - 1]}`);
            break
        } else if (arr[middle] > el) {
            end = middle
            continue
        } else if (arr[middle] < el) {
            start = middle
            continue
        }
    }
}
searchBinary(value, arrWithValue)