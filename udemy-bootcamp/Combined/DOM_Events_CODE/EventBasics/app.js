// Set click response to be a function
// Note: not calling the function here, instead giving it a function to call
const but2 = document.querySelector('#v2')
but2.onclick = function() {
    console.log('clicked')
}

// onmouseenter --> when pointer enters the button box
but2.onmouseenter = function() {
    console.log('STOP TOUCHING ME')
}

// addEventListener --> specify the event type and a callback to run
// Can listen for any sort of events
// Can assign multiple functions to the same action (only 1 function if assigned directly)
// Can add option flags (ex. once, passive etc.)
const btn = document.querySelector('h1')
btn.addEventListener('click', () => {
    alert("You clicked me!")
})
const btn3 = document.querySelector('#v3')
btn3.addEventListener('mouseup', () => {
    console.log('Mouse up')
}, {once: true})
btn3.addEventListener('mouseup', () => {
    console.log('Also mouse up')
})