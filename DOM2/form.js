const tweetForm = document.querySelector('#tweetForm')
const tweetsContainer = document.querySelector('#tweets')

tweetForm.addEventListener('submit', function(e) {
    e.preventDefault()
    
    const username = tweetForm.elements.username
    const tweet = tweetForm.elements.tweet

    addTweet(username.value, tweet.value)
    username.value = ''
    tweet.value = ''
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li')
    const bTag = document.createElement('b')
    bTag.append(username)
    newTweet.append(bTag)
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet)    
}