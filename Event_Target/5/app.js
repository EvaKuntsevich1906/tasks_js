// Добавьте картинку на страницу. При наведении на картинку мышкой необходимо
// ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то
// возвращается первая картинка

const img = document.querySelector(".img");
img.addEventListener("mouseover", function performance() {
    img.style = `background-image: url(./assets/HST.png);
    background-repeat: no-repeat;
    height: 250px;
    width: 250px;
    background-size: contain;`
})

img.addEventListener("mouseout", function performanceout() {
    img.style = `background-image: url(./assets/HS.png);
    background-repeat: no-repeat;
    height: 250px;
    width: 250px;
    background-size: contain;`
})