const btn = document.querySelector(".btn"); 
const audio = document.querySelector(".audio"); 


let flag = false;

btn.addEventListener("click", () => {
    audio.src = `./audio/enya.mp3`
    if(flag)  {
        audio.play()
        flag = true;
        btn.textContent = `ВКЛЮЧИТЬ`;
    } else {
     audio.pause()
     flag  = false;
     btn.textContent = `ОСТАНОВИТЬ`;
    }
})

