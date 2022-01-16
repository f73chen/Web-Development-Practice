const express = require("express");
const app = express()

// Runs on each request; doesn't matter if response is valid
// req --> JS automatically creates a request object and passes in as the first object
// res --> send the request through this object (string, object, html, etc.)
// app.use((req, res) => {
//     console.log("We got a new request!")
//     // console.dir(req)
//     // res.send("HERE IS YOUR RESPONSE")
//     // res.send({color: 'red'})
//     // res.send('<h1>Bolded Title<h1>')
// })

// Routing --> send different responses depending on the request
// Routes are matched in order, so put wildcard etc. last
// /cats => 'meow'
// /dogs => 'woof'
// / => home page
app.get('/cats', (req, res) => {
    console.log("CAT request")
    res.send('meow')
})
app.get('/dogs', (req, res) => {
    console.log("DOG request")
    res.send('woof')
})
app.get('/', (req, res) => {
    console.log("HOME page")
    res.send('This is the home page')
})

// Match requests based on some pattern
// Use ':' to denote a variable which can be extracted from the request params list
app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params
    res.send(`<h1>Browsing the ${subreddit} subreddit<h1>`)
})
app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit, postId} = req.params
    res.send(`<h1>Browsing the ${subreddit} subreddit. Post ID: ${postId}<h1>`)
})

// Automatically parses query into key-value pairs
// http://localhost:3000/search?q=<myQuestion>&color=<myColour>
// Separated by '&'
app.get('/search', (req, res) => {
    const {q, color} = req.query
    if (!q || !color){
        res.send('Nothing found if nothing searched')
    } else {
        res.send(`Search results for: ${q} and ${color}`)
    }
})

// For every other path, respond with error
// Must put after all normal routes, else all pages get this response
app.get('*', (req, res) => {
    res.send("I don't know that path!")
})

// Post requests are different from get requests
app.post('/cats', (req, res) => {
    console.log("CAT request")
    res.send('POST request received')
})

// Set up a server by listening on a port
// Only served locally on my computer
// http://localhost:3000/
app.listen(3000, () => {
    console.log("Listening on port 3000")
})