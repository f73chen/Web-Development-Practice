// Instead of submitting the form, stay on the page and do something else instead
// ex. creating a comment on a post
// preventDefault --> prevents the default action
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
