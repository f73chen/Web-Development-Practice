// DOM (document object model) --> a JS representation of a webpage
// Aka the JS "window" into the contents of a webpage
// Just a bunch of objects you can interact wit via JS

// Browser creates a bunch of JS objects based on HTML and CSS (ex. body, h1, ul)
// Have connections (ex. h1 is a child of body)
// At the top is the special object "document", which is created automatically when the page is loaded

// Show document contents
console.dir(document)
document.all[10]

// Select --> target a specific property
// Fetches the object that represents some element of the page
// Object can then be manipulated (ex. change image url / content etc.)
// 1. getElementById(ID) --> one object with a specific id
const searchBox = document.getElementById('text')
console.dir(searchBox)

// 2. getElementsByTagName(tag) --> returns an HTMLCollection of items with the tag name
// Can be indexed like an array, but is not an array
const allText = document.getElementsByTagName('p')
const oneText = allText[0]

// 3. getElementsByClassName(class)
const firstLinks = document.getElementsByClassName('firsts')
for (let link of firstLinks) {link.hidden = true;}

// querySelector --> select via the same format as CSS
// Returns the first match
document.querySelector('h1')
document.querySelector('h3:nth-of-type(2)')
document.querySelector('a[href="home.html"]')

// querySelectorAll --> returns all matching elements instead of just the first match
document.querySelectorAll('p a')

// Content manipulation

// .textContent --> shows the text exactly as written in the html file (with line breaks etc.)
// .innerText --> shows the text as displayed (one coherent paragraph and removes hidden text)
// .innerHTML --> also gives the markup surrounding the text
document.querySelector('h1').innerText = "LOLOL"
document.querySelector('h1').innerHTML = "<i>LOLOL</i>"
document.querySelector('h1').innerHTML += "<b>Additional</b>"

// .href --> gets attribute through the JS object (computed value)
// getAttribute --> get the direct quote from the HTML itself
const firstLink = document.querySelector('a')
firstLink.href
firstLink.getAttribute('href')

const box = document.querySelector('input')
box.type = 'color'
box.setAttribute('type', 'checkbox')

// Style selector doesn't include CSS styles, only inline styles
// Usually avoid using inline styles
const h1 = document.querySelector('h1')
h1.style.color = 'green'
h1.style.fontSize = '3em'

// getComputedStyle --> the final styles applied when it's displayed
// Pass in the actual object to the DOM
window.getComputedStyle(h1)
window.getComputedStyle(h1).fontSize