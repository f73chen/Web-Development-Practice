// objects --> collections of properties (key-value pairs)
// Instead of using an index, use custom keys (labels)
const person = {firstName: 'Mick',
                lastName: 'Jagger'}

// 3 different ways to get object properties
// All keys are cast to strings
console.log(person.firstName)
console.log(person["lastName"])

// Can evaluate an expression in square brackets but not after .
let lnPlaceholder = "lastName"
console.log(person["first" + "Name"])
console.log(person[lnPlaceholder])

// Update or add properties by assigning a key-value pair
person.firstName = "John"
console.log(person.firstName)