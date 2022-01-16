// Event bubbling --> one click triggers all events higher up the hierarchy
// Like a bubble rising from the bottom to the surface
const makeRandomColour = function() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

const button = document.querySelector('#changeColor')
const container = document.querySelector('#container')

// stopPropagation --> prevents even from bubbling up any further
button.addEventListener('click', function (e) {
    container.style.backgroundColor = makeRandomColour()
    e.stopPropagation()
})
container.addEventListener('click', function() {
    container.classList.toggle('hide')
})