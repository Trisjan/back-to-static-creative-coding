// Get a reference to the root element of the document (html)
var pos = document.documentElement;

// Add an event listener for mousemove events on the root element
pos.addEventListener('mousemove', e => {
    // Set CSS variables '--x' and '--y' based on mouse coordinates
    pos.style.setProperty('--x', e.clientX + 'px')
    pos.style.setProperty('--y', e.clientY + 'px')
})

// Get references to the button, light, and create an audio element
const button = document.querySelector(".button")
const light = document.querySelector(".light")
const audio = new Audio("assets/click.mp3")

// Add a click event listener to the button
button.addEventListener("click", () => {
    // Toggle the 'turnoff' class on the light element
    light.classList.toggle("turnoff")
    // Play the click sound
    audio.play();
})