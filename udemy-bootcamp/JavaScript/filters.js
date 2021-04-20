// setTimeout --> pass in action and number of milliseconds to wait
console.log("Hello!");
setTimeout(() => {console.log("Are you still there?")}, 3000);

// setInterval --> repeatedly performs an action after waiting some time
// clearInterval --> stops the loop with a certain ID from repeating
const id = setInterval(() => {console.log(Math.random())}, 2000);
clearInterval(id)

// filter --> creates a new array with all elements that pass the test
// Adds the item to the filtered array if the filter function returns true
// Callback must be a boolean function
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const odds = nums.filter(n => (n % 2 === 1))

// every --> tests whether all elements in the array pass the test function
// Returns a boolean value
const words = ["dog", "dig", "log", "bag", "wag"]
words.every(word => (word.length === 3))    // True
words.every(word => (word[0] === 'd'))      // False
words.every(word => (word[word.length-1] === 'g'))  // True

// some --> similar to every, but returns true if any of the array elements pass the test function
const words = ["dog", "jello", "log", "cupcake", "bag", "wag"]
words.some(word => (word.length > 4))       // True

// reduce --> executes a reducer function on each element of the array
// Results in a single value
// Within the loop, the returned value becomes the next accumulator value
// Doesn't have to be mathematical calculations; can use comparisons etc.
const prices = [8, 3, 6, 5, 4, 7, 2, 9, 0, 11]
let totalPrice = prices.reduce((accumulator, currentVal) => (accumulator + currentVal));
let minPrice = prices.reduce((min, price) => {
    if (price < min) {return price;}
    return min;
})

// When using object/nested functions, the 'this' keyword refers to the object
// However, when using nested arrow functions, it refers to the execution context where it was created
// In this case, shoutName() was called in the 'person' context
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}
person.shoutName()