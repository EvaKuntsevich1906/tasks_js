let generationVal = Math.floor(Math.random() * 50);

function binSearch(generationVal_) {
    try {
        let start = 0;
        let end = 50;
        for (let i = start; i < end; i++) {
            let middle = prompt(`Введите среднее от ${start} до ${end}`);
           
            if (isNaN(middle)) throw new Error("Вы ввели не число")
           
            if (middle == generationVal_) {
                alert(`Вы угадали число  ${generationVal_}`);
                break
            } else if (middle > generationVal_) {
                end = middle
                alert("Введенное больше, чем число которое загадал компьютер")
            } else if (middle < generationVal_) {
                start = middle
                alert("Введенное меньше, чем число которое загадал компьютер")
            }
    }
    } catch (err) {
        return err.message
    }
}
let res =  binSearch(generationVal)
alert (res)