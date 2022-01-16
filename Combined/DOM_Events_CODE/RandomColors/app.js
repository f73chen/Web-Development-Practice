const h1 = document.querySelector('h1')
const btn = document.querySelector('button')

const makeRandomColour = function() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

btn.addEventListener('click', () => {
    const rgb = makeRandomColour()
    document.body.style.backgroundColor = rgb
    h1.innerText = rgb
})