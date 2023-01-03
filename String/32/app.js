//Палиндром

let str = prompt().toLowerCase(); 

if (str === str.split("").reverse("").join("")) {
    alert("Это палиндром")
} else {
    alert("Это не палиндром")
};


