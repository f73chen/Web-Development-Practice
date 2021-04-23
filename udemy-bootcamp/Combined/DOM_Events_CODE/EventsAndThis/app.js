const makeRandomColour = function() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

// keyword 'this' --> refers to whatever was clicked on
const changeColour = function() {
    this.style.backgroundColor = makeRandomColour()
    this.style.color = makeRandomColour()
}

const buttons = document.querySelectorAll('button')
for (let btn of buttons){
    btn.addEventListener('click', changeColour)
}

const h1s = document.querySelectorAll('h1')
for (let h1 of h1s) {
    h1.addEventListener('click', changeColour)
}