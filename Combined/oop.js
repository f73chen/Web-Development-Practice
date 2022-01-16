// Prototype object --> serves as a template for other objects
// Typically contains methods that all children have access to
// __proto__ is a reference to the actual prototype object
String.prototype.grumpus = () => console.log("Go Away!")
"".grumpus()

// 'this' refers to whatever is left of the dot
// Note: only works for functions, not lambdas
String.prototype.yell = function() {
    return `OMG!! ${this.toUpperCase()}!!!`
}
"hello there".yell()

// Can override existing methods
Array.prototype.pop = function() {
    return "No thanks";
};
[1, 2, 3].pop()

// Initialization factory
function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const {r, g, b} = this;     // Destructure from 'this'
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function() {
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 18) + b).toString(16).slice(1);
    };
    return color;
}

// Only inherited functions are equal
const color1 = makeColor(100, 100, 200)
const color2 = makeColor(255, 0, 200)
color1.rgb === color2.rgb       // false
"hello".slice === "bye".slice   // true

// Constructors
// Activated with the 'new' keyword
function Color(r, g, b){
    this.r = r;
    this.g = g;
    this.b = b;
}
Color.prototype.rgb = function() {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`;
};
Color.prototype.hex = function() {
    const {r, g, b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 18) + b).toString(16).slice(1);
};
const colour1 = new Color(100, 100, 100)
const colour2 = new Color(200, 200, 200)
colour1.rgb === colour2.rgb     // true

// Class --> groups together related functions
class Color {
    // Runs automatically as long as it's named 'constructor'
    constructor(r, g, b, name = 'N/A') {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    // Call another class function from within a class function
    // Can also call functions from the constructor
    innerRGB() {
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }
    // Functions are added to the prototype
    rgb() {
        const {r, g, b} = this;
        return `rgb(${this.innerRGB()})`;
    };
    hex() {
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 18) + b).toString(16).slice(1);
    };
}
const c1 = new Color(255, 67, 89, 'tomato')
const c2 = new Color(125, 125, 125, 'medium')
c1.hex === c2.hex   // true

// Extends --> imports parent constructor and methods if not found in child class
// Super --> references the parent class; usually used to extend the constructor
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}
class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOW';
    }
}
class Dog extends Pet {
    bark() {
        return 'WOOF!';
    }
}
const wyatt = new Dog('Wyatt', 13)
wyatt.eat()     // "Wyatt is eating!"
const monty = new Cat('Monty', '14', 9)