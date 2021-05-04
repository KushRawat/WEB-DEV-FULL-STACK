const express = require("express")
const app = express()

app.use((req, res) => {
    console.log("WE HAVE A REQUEST!")
    // console.dir(req)
    // res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE")
    // res.send({color: 'red'})
    res.send('<h1>This is my webpage</h1>')
})

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})

