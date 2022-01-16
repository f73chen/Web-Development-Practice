console.log('Hello from Args file')

// Returns the command line arguments passed when the Node.js process was launched
console.log(process.argv)   // ['node.exe', 'args.js']

const args = process.argv.slice(2)
for (let arg of args) {
    console.log(`Hello ${arg}`)
}