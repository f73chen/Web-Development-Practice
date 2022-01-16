// call stack --> the mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions
// How JS knows what function is currently being run and what functions are called from within that function etc.
// 1. When a script calls a function, the interpreter adds it to the call stack and starts carrying out the function
// 2. Any functions that are called by that function are added to the call stack further up, and run where their calls are reached
// 3. When the current function is finished, the interpreter takes it off the stacka nd resumes execution where it left off in the last code listing

// JS is single-threaded --> at any given point in time, that single JS thread is running at most one line of JS code
// Browsers come with web APIs that can handle certain tasks in the background (ex. making requests or setTimeout)
// The JS call stack recognizes these web API functions and passes them to the browser to take care of
// Once the browser finishes those tasks, they return and are pushed onto the stack as a callback
console.log('I print first');
setTimeout(() => {
    console.log('I print after 3 seconds');
}, 3000);
console.log('I print second');

// Promises --> objects representing the eventual completion or failure of an async operation (ex. requesting data)
// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// Callback hell --> code is nested very deep with inside elements dependent on the success of outside (previous) elements
// Hard to establish relationship and change settings
fakeRequestCallback('books.com/page1', 
    function(result) {
        console.log('It worked!');
        console.log(result);
        // If page1 worked, also request from page2
        fakeRequestCallback('books.com/page2', 
        function(result) {
            console.log('It worked again!');
            console.log(result);
        }, 
        function(result) {
            console.log('It failed on the second run');
            console.log(result)
        })}, 
    function(result) {
        console.log('It failed');
        console.log(result);
});

// promise --> a returned object to which you attach callbacks, instead of passing callbacks into a function
// Attach callbacks depending on whether the promise was resolved or rejected
let promise = fakeRequestPromise('hikingtrails.com')
promise
    .then(() => {
        console.log('It worked!')
        fakeRequestPromise('yelp.com/api/')
            .then(() => {
                console.log('It worked twice!')
            })
            .catch(() => {
                console.log('ERROR on page two')
            }
    )})
    .catch(() => {
        console.log('ERROR on page one')
    })

// Instead, can return promise objects and chain '.then()' instead of nest them (aka promise chain)
// Use a single catch for all
fakeRequestPromise('yelp.com/page1')
    .then((data) => {
        console.log('it worked! (1)');
        console.log(data);
        return fakeRequestPromise('yelp.com/page2')
    })
    .then((data) => {
        console.log('it worked! (2)');
        console.log(data);
        return fakeRequestPromise('yelp.com/page3')
    })
    .then((data) => {
        console.log('it worked! (3)');
        console.log(data);
    })
    .catch((err) => {
        console.log('Failed to fetch all data')
        console.log(err)
    })

// Promise must receive 2 functions resolve and reject as parameters
// Will remain pending until either resolve or reject is called inside
const ownP = new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
        resolve()
    } else {
        reject();
    }
})

// Use implicit returns to shorten code
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}
delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))

// Async functions --> newer and cleaner syntax for working with async code
// Automatically returns a promise
// If the function returns a value, the promise will be resolved with that value
// If the function throws an exception, the promise will be rejected
async function hello() {
    return 'Hey guy!';
}
hello();
async function ohNo() {
    throw new Error('Oh no!');
}
ohNo(); 

const sing = async () => {
    throw "ERROR"
    return 'la la la la';
}
sing()
    .then((data) => {console.log('Promise resolved with: ', data)})
    .catch((err) => {console.log('Encountered error: ', err)})

// await --> pause the execution of the function, waiting for a promise to be resolved
// Often used inside of functions declared with async
// The next line will only run after the previous promise is resolved
async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
}

// The value that was awaited can be stored in a variable
// Use try-catch to handle rejected promises
async function makeTwoRequests() {
    try {
        let data1 = await(fakeRequestPromise('/page1'))
        console.log(data1)      // Here is your fake data from /page1
    } catch(e) {
        console.log(e)
    }
}