// . По двойному клику на кнопку изменить цвет кнопки


const button = document.querySelector(".btn");
let flag = false;


button.addEventListener('dblclick', function newStyle() {
    if (flag == false) {
        this.style = ` background-color: red `;
        flag = true;
    } else {
        this.style = ` background-color: green `;
        flag = false
    }
});

newStyle()