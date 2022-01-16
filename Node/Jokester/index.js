const jokes = require("give-me-a-joke")
const colors = require("colors")
const cowsay = require("cowsay")

jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
})

// npm i <package> --> local install
// npm i -g <package> --> global install
// npm link <package> --> link to current dir; able to be required

// npm install --> if run in directory with no packages but a package.json, installs all dependencies
// Useful when running foreign projects