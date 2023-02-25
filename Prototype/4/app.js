// По условию задачи даны инпут и кнопка. Необходимо преобразовать строку в
// CamelCase (примерСтрокиВCamelCase )

const inp = document.querySelector(".inp").value;
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
btn.addEventListener("click", function toCamelCase() {
    try {
      
        const splitstr = inp.split(" ")
        let camelCaseStr = ""; 

        for( let i = 0; i<splitstr.length; i++) {
            camelCaseStr += splitstr[i][0].toUpperCase() + splitstr[i].slice(1); 
            result.innerHTML = camelCaseStr;
            inp = " "
        }
    } catch (err) {
        alert(err.message)
    }
})

// const str = inp.split(" ").map((el, index) => index == 0 ? el : el[0].toUpperCase() + el.slice(1)).join(" ")
// result.innerHTML = str
// })