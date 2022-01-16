function hello() {
    console.log("Hello!");
}

// No problem(s) with missing arguments until it's used inside 
function greet(firstname, lastname) {
    console.log(`Hello ${firstname}`)
    return "out"
}
greet("Grace")