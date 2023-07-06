// . Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'; 

let strapp2: string[] = ["max", "stas", "eva", "hanna", "jul", "js"]; 

for (let i: number = 0; i<strapp2.length; i++) {
    if(strapp2[i].includes("a")) {
        console.log(strapp2[i]);
    }
}