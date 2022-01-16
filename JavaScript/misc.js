// spread --> allows an iterable (ex. array) to be expanded in places where zero or more arguments (for funciton calls) or elements (for array literals) are expected
// or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected

// 1. Expands an iterable (array, string, etc.) into a list of arguments
const nums = [9, 3, 2, 8]
Math.max(nums)      // NaN
Math.max(...nums)   // 9
// Same as Math.max(9, 3, 2, 8)
console.log("Hello")    // Hello
console.log(..."Hello") // H e l l o

// 2. Combine array by copying expanded values into a new array
// Also works when spreading strings
const cats = ['Blue', 'Scout', 'Rocket']
const dogs = ['Rusty', 'Wyatt']
const allPets = [...cats, ...dogs]

// 3. Spread in object literals copies properties from one object into another object literal
// The latter object overrides the previous object's properties
// Ex. useful when updating user profile information
const feline = {legs: 4, family: 'Felidae'};
const canine = {family: 'Caninae', furry: true};
const dog = {...canine, isPet: true};
const lion = {...feline, genus: 'Panthera'}
const catDog = {...feline, ...canine}   // {legs: 4, family: "Caninae", furry: true}

// The argument object:
// Available inside every ffunction
// An array-like object with a length property but no array methods
// Contains all arguments passed to the function
// Not available inside of arrow functions
function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total
}
sumAll(8, 4, 3, 2)  // 17

// Rest params --> collects all remaining arguments into an actual array
function sumAll(...nums) {
    let total = 0;
    for (let n of nums) {total += n;}
    return total;
}

// Destructuring --> short, clean syntax to unpack values from arrays or properties from objects into distinct variables
const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp']
const [gold, silver, bronze] = raceResults          // Unpacks the first 3 items
const [fasteset, ...everyoneElse] = raceResults     // Unpacks the first item and lists the rest

const user = {
    email: 'harvey@gmail.com',
    password: 'aeoirj345raor',
    firstName: 'Harvey',
    lastName: 'Milk',
    bio: 'Politician',
    born: 1930
}
const {email, firstName, lastName, bio} = user;
const {born: birthYear} = user;                     // Extracts and renames the attribute
const {died = 'N/A'} = user                         // Use default value if not found

// Param destructuring --> directly destructure the object in the param inputs
// Can also add renaming and default values
const fullName = ({first, last}) => {return `${first} ${last}`}
const runner = {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya'
}
fullName(runner);   // "Eliud Kipchoge"