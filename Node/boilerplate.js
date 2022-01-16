// Explicitly requires import
const fs = require('fs');
const folderName = process.argv[2] || 'Project'

// Async version
// fs.mkdir('customDir', {recursive: true}, (err) => {
//     console.log('In the callback!')
//     if (err) throw err;
// });
// console.log('Comes after the callback')

// Sync version --> guarantees rest of the code runs after
try {
    fs.mkdirSync(folderName)
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/styles.css`)
    fs.writeFileSync(`${folderName}/app.js`)
} catch(e) {
    console.log(e)
}