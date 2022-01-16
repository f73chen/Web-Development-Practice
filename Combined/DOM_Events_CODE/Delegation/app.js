// If add event listener to individual elements, new elements won't receive the listener
// ex. new tweets added can't be removed
const lis = document.querySelectorAll('li');
for (let li of lis) {
    li.addEventListener('click', function() {
        li.remove()
    })
}

// ###### //
const tweetForm = document.querySelector('#tweetForm')
const tweets = document.querySelector('ul')
const addTweet = function(userName, content) {
    const newTweet = document.createElement('li');
    const boldTag = document.createElement('b');
    boldTag.append(userName)
    newTweet.append(boldTag)
    newTweet.append(` - ${content}`)
    tweets.append(newTweet)
}

tweetForm.addEventListener('submit', function(e) {
    // const formVal = document.querySelectorAll('input')[1].value
    const userName = tweetForm.elements.username;
    const content = tweetForm.elements.tweet;
    e.preventDefault()
    addTweet(userName.value, content.value)
    userName.value = ''
    content.value = ''
})
// ###### //

// Instead, add the event listener to a parent element
// target --> the element that was clicked on
tweets.addEventListener('click', function(e) {
    e.target.nodeName === 'LI' && e.target.remove()
})