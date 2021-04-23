const input = document.querySelector('input')
const h1 = document.querySelector('h1')

// change --> when the text box is unfocused and the text value has changed
// Doesn't count as change if typed but didn't unfocus (click away)
input.addEventListener('change', function(e) {
    console.log('LEFT')
})

// input --> when any typing is done inside the box
// ex. typing a letter, pasting, arrow keys etc.
// Set h1 innerText like a live preview
input.addEventListener('input', function(e) {
    console.log("INPUT EVENT")
    h1.innerText = input.value
})