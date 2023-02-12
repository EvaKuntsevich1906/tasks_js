const btn = document.querySelector(".btn");
let inp1 = document.querySelector(".inp1").value
let inp2 = document.querySelector(".inp2").value

btn.addEventListener("сlick", function zamena(btn) {
    [   inp1 = document.querySelector(".inp2").value,
        inp2 = document.querySelector(".inp1").value,
    ] = [
        inp2 = document.querySelector(".inp2").value,
        inp1 = document.querySelector(".inp1").value,
    ];
});
const res = zamena(inp1, inp2)
console.log(res);