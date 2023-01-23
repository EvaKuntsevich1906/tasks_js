// Продемонстрируйте пример замены контекста одного объекта на другой

let obj = {
    id: 19, 
    name: "Eva", 
    years: 20
}

let newObj = {
    id: 10, 
    name: "Hanna",
    years: function  generationYears() {
        console.log(this.id);
    }
}

// console.log(newObj.years());
console.log(newObj.years.call(obj)) // в данном случае id-шник текущего обьекта ЕДИНОРАЗОВО сменятся на указанный
console.log(newObj.years()) // поскольку предыдущая смена была ЕДИНОРАЗОВОЙ акцией, id вернулось на свое место и равно 10