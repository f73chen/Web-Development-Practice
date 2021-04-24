// AJAX --> asynchronous JS and XML
// AJAJ --> async JS and JSON
// XML --> extensible markup language (not commonly used)
// Interacting with a server (behind the scenes) to request information (after the page was already loaded)
// Ex. Reddit loading new posts while scrolling
// Returns simple data in JSON format

// API --> application programming interface
// Broad term for any interface where a computer or software interact with a piece of software
// Web API --> http-based endpoints that provide/expose information for other software to consume
// When going to the endpoint link, don't arrive at a webpage but a JSON of pure information (no HTML or CSS)

// JSON --> JS object notation
// Consistent and predictable way to format data
// Not a 1-to-1 relationship between JS and JSON (some notations are missing in JSON)
JSON.parse("{\"breed\":\"lab\",\"color\":\"black\",\"isAlive\":true}")
JSON.stringify({breed: "lab", color: "black", isAlive: true})

// Use Postman to edit and send API requests
// Query string: ___?query=:___
// Some websites require headers (ex. Accept=application/json)

// Fetch API --> the newer way of making requets via JS
// Returns a promise object with status (resolved or rejected) and response (content)
// Resolves the promise as soon as it fetches the header, but maybe not the actual response
// .json() --> the actual content
fetch("https://api.cryptonator.com/api/full/btc-usd")
    .then(res => {
        console.log("RESPONDED, WAITING TO PARSE:...")
        return res.json()
    })
    .then(res => {
        console.log(res)
        console.log(res.ticker.price)
    })
    .catch(e => {
        console.log(e)
    })

// Simplify the code using async (make it linear)
const fetchBitcoinPrice = async() => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/full/btc-usd')
        const data = await res.json()
        console.log(data.ticker.price)
    } catch(e) {
        console.log("Something went wrong", e)
    }
}
fetchBitcoinPrice()

// Axios --> a library for making HTTP requests
// Only responds once everything has been fetched
// .data contains parsed JSON
// Doesnt introduce new functions, but makes requesting easier
axios.get('https://api.cryptonator.com/api/full/btc-usd')
    .then(res => {
        console.log(res.data.ticker.price)
    })
    .catch(e => {
        console.log("ERROR: ", e)
    })

const fetchBitcoin = async() => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/full/btc-usd')
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log("ERROR: ", e)
    }
}
fetchBitcoin()

// Requests can be configured (ex. Accept: application/json)
const jokeButton = document.querySelector('button')
const body = document.querySelector('body')
const ul = document.querySelector('ul')
const getDadJoke = async() => {
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    return res.data.joke
}
const addNewJoke = async() => {
    const jokeText = await(getDadJoke())
    const li = document.createElement('li')
    li.append(jokeText)
    ul.append(li)
}
jokeButton.addEventListener('click', () => {
    addNewJoke()
})