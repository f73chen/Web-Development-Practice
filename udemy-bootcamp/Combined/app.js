// More common to assign a class to an object with JS
const h2 = document.querySelector('h2')
h2.setAttribute('class', 'purple')

// classList --> retrieve or interact with a list of classes on an object
h2.classList    // DOMTokenList ["purple", value: "purple"]

// When adding, don't have to worry about what classes are already applied
h2.classList.add('border')
h2.classList.remove('purple')

// Check if a classList contains a class:
h2.classList.contains('border')

// toggle --> adds it if it's not there; removes it if it is
h2.classList.toggle('purple')

// Sometimes, want to enact button action on parent or child element
// Objects can have only one parent element, but multiple child elements
// parentElement --> elements surrounding the object
h2.parentElement                                // <div>
h2.parentElement.parentElement                  // <div>
h2.parentElement.parentElement.parentElement    // <body>

// children --> list-like array of child elements
const para = document.querySelector('b').parentElement
para.childElementCount                          // 8
para.children                                   // HTMLCollection(8) [b, b, a, a, a, a, a, a]
para.children[0]                                // <b>

// nextElementSibling --> next HTML element in the same hierarchy
// nextSibling --> next node (usually return character texts)
const img = document.querySelector('img')
img.nextElementSibling                          // <p>
img.nextSibling                                 // #text
img.previousElementSibling                      // <h1>

// Create new elements and add them to the page
const newImg = document.createElement('img')
newImg.src = "https://yt3.ggpht.com/ytc/AAUvwni975cgRdYmzw_iddkTD2grzUsQqPf_ACPowOV7rYk=s900-c-k-c0x00ffffff-no-rj"
document.body.appendChild(newImg)
newImg.classList.add('square')

// append --> appending to the inside of a paragraph
// Can add one or multiple elements
const p = document.querySelector('p')
p.append('I AM NEW TEXT ', 'this is the second part')

// prepend --> appending as the first child of an element
const newB = document.createElement('b')
newB.append('BOLDED TEXT')
p.prepend(newB)

// insertAdjacentElement --> specify location to add sibling element
    // beforebegin --> before the targetElement itself
    // afterbegin --> just inside the targetElement, before its first child
    // beforeend --> just inside the targetElement, after its last child
    // afterend --> after the targetElement itself
const h22 = document.createElement('h2')
h22.append(' are adorable chickens')
const h1 = document.querySelector('h1')
h1.insertAdjacentElement('afterend', h22)
h1.nextElementSibling                           // <h2>

// removeChild --> call on the parent and pass in the child element
const li = document.querySelector('li')
li.parentElement.removeChild(li)

// remove --> removes the node itself
const img2 = document.querySelector('img')
img2.remove()