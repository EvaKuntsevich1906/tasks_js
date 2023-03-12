function getFunc() {
    let a = 7;
    return function (b) {
        alert(a + b);
     }
}

let f = getFunc();
f(5);

