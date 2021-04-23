// MouseEvent object --> contains information about the click event
// Useful for keyboard events when tracking which key was pressed
document.querySelector('button').addEventListener('click', function(evt) {console.log(evt);})

// key --> the resulting character (ex. shift)
// code --> the actual location of the key on the keyboard (ex. ShiftLeft)
const input = document.querySelector('input');
input.addEventListener('keydown', function(evt) {
    console.log(evt.key)    // r
    console.log(evt.code)   // KeyR
})