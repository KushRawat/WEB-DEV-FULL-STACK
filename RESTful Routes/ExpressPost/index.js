const express = require("express")
const app = express()
const path = require("path")
const methodOverride = require('method-override')
const { v4: uuid } = require("uuid")

app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]
// READ COMMENTS   
app.get('/comments', (req, res) => {
    res.render("comments/index", { comments })
})

// NEW COMMENT
app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments')
})

// SHOW COMMENT
app.get('/comments/:id', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', { comment })
})

// UPDATE COMMENT
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params
    const updateComment = req.body.comment
    const foundComment = comments.find(c => c.id === id)
    foundComment.comment = updateComment
    res.redirect('/comments')
})

app.get('/comments/:id/edit', (req, res) => {
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', { comment })
})

// DELETE COMMENT
app.delete('/comments/:id', (req, res) => {
    const {id} = req.params
    comments = comments.filter(c => c.id !== id)
    res.redirect('/comments')
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})

app.listen('3000', () => {
    console.log("Listening on port 3000!")
})