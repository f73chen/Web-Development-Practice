for (let i = 0; i < 6; i++) {
    console.log(i);
}

const animals = ["Zebra", "Tiger", "Skunk"]
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

let username = prompt("Username: ")
while (true) {
    if (username === "username") {break;}
    username = prompt("Username: ");
}

// for (var of iterable) --> prints each item in list
const subreddits = ['cringe', 'askreddit', 'books', 'funny']
for (let sub of subreddits){
    for (let c of sub){
        console.log(c);
    }
}

// Objects are not iterable
// for (var in object) --> iterate object keys
// Alternatively, get keys using Object.keys(obj)
const person2 = {firstname: 'Mick', lastname: 'Jagger'}
for (let name in person2){
    console.log(name)
}