const blue = require('./blue')
const sadie = require('./sadie')
const janet = require('./janet')
const allCats = [blue, sadie, janet]

// JS recognizes 'index.js' as the default entrypoint of the directory
// Looks for this file when exporting an entire directory
// Whatever this file exports is what the directory exports
module.exports = allCats;