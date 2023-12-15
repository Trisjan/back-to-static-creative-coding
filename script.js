var pos = document.documentElement;
pos.addEventListener('mousemove', e => {
    pos.style.setProperty('--x', e.clientX + 'px')
    pos.style.setProperty('--y', e.clientY + 'px')
})

const button = document.querySelector(".button")
const light = document.querySelector(".light")
const audio = new Audio("assets/click.mp3")

button.addEventListener("click", () => {
    light.classList.toggle("turnoff")
    audio.play();
})