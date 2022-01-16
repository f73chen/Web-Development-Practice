// Require the whole variable or destructure it
const math = require('./math')
const {PI, square} = require('./math')

console.log(math)
console.log(math.PI)
console.log(math.square(9))

console.log(PI)
console.log(square(9))

// Require the entire shelter directory
const cats = require('./shelter')
console.log(cats)