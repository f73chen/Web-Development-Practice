// Won't export this portion
const add = (x, y) => x + y;
const PI = 3.14159;
const square = x => x * x;

// Must explicitly set things to be exported
// Becomes the value of the 'require'd variable in the other file
module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;

// Alternatively, just write 'exports'
exports.PI = PI;
exports.square = square;