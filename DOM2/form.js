const tweetForm = document.querySelector('#tweetForm')
tweetForm.addEventListener('submit', function(e) {
    console.log('Submit!!')
    e.preventDefault()
})