// forEach --> accepts a callback function
// Calls the function once per element in the array
// Similar to for ... of ...
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
nums.forEach (function (n) {console.log(n**2)});

// map --> creates a new array with the result of calling a callback on every element in the array
const texts = ['rofl', 'lol', 'omg', 'ttyl']
const caps = texts.map(function (word) {return word.toUpperCase()});
console.log(texts)  // ["rofl", "lol", "omg", "ttyl"]
console.log(caps)   // ["ROFL", "LOL", "OMG", "TTYL"]

// Arrow functions --> more compact than regular function expressions
// Don't have to write the keyword "function"
const square = (x) => {return x**2;}

// Implicit return
// Only works if there's only a single expression or returned value
// All of the following functions do the same thing:
const isEven = function (num) {return num % 2 === 0;}
const isEven = (num) => {return num % 2 === 0;}
const isEven = num => {return num % 2 === 0;}
const isEven = num => (num % 2 === 0)       // Implicit return
const isEven = num => num % 2 === 0;        // Short one-liner implicit return