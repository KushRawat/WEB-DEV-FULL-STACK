const express = require("express")
const app = express()

// app.use((req, res) => {
//     console.log("WE HAVE A REQUEST!")
//     // console.dir(req)
//     // res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE")
//     // res.send({color: 'red'})  
//     res.send('<h1>This is my webpage</h1>')
// })

app.get('/', (req, res) => {
    res.send("This is home page!")
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!! THIS IS DIFFERENT FROM GET REQUESTS!!')
})

app.get('/cats', (req, res) => {
    // console.log("CAT REQUEST!!")
    res.send("MEOWW!!")
})

app.get('/dogs', (req, res) => {
    res.send("WOOF!!")
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit:newreddit} = req.params
    res.send(`<h1>Browsing the ${newreddit} subreddit!</h1>`)
})

app.get('*', (req, res) => {
    res.send("I don't know that path!")
})

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})

