for (var i = 0; i < 5; i++){
    let msg = "keep";
    console.log(msg)
}
console.log(i)      // var means 'i' is retained outside of scope
console.log(msg)    // let means msg is unreachable out of scope

// An inner function nested in an outer function has access to the variables in the outside function
// However, the outer function can't access variables from the inner function
function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther']
    function cryForHelp() {
        for (let hero of heroes){
            console.log(`Help us ${hero.toUpperCase()}`)
        }
    }
    cryForHelp()
}
bankRobbery()

// Store a function as an object variable
// 'add' is the name of the variable, not of the function
// JS treats functions as just another value
const add = function (x, y) {
    return x + y;
}
add(1, 3)

// Higher order function: functions that operate on/with other functions
// They can accept other functions as arguments and return a function
// Function inside can access wrapper variables
// Common to set up factory functions that change a small part of the returned function
function callTwice(func, insideVal) {
    func();
    func();
    return function () {
        console.log(`Inside value: ${insideVal}`)
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

const returned = callTwice(rollDie, 11)
returned()

// A method is a function that was added as a property to an object
// Every method is a function, but not every function is a method
// Ex. str.toUpperCase(); list.indexOf()
const myMath = {
    PI: 3.14159,
    square: function (num) {return num ** 2;},
    sqrt(num) {return num ** 0.5}   // Shorthand don't need 'function' keyword 
}
console.log(myMath.PI)
console.log(myMath.square(3))
console.log(myMath.sqrt(16))

// JS has a top-level object called Window
// When writing new functions, they're actually added as a property to the Window object
// calling alert() == calling window.alert()

// Keyword 'this' to access other properties on the same object
// If not in a defined object, 'this' actually references the window object
const cat = {
    name: 'Blue Steele',
    meow() {
        console.log(`${this.name} says MEOWWW`)
    }
}
cat.meow()  // Blue Steele says MEOWWW
const meow2 = cat.meow
meow2()     //  says MEOWWW

// Try catch
try {
    hellow.toUpperCase()
} catch {
    console.log("ERROR")
}