const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!")
        console.log(err)
    })

const p = new Product({
    name: 'Ruby Grapefruit',
    price: 100,
    category: 'fruit'
})

p.save()
    .then(p => {
        console.log(p)
    })
    .catch(e => {
        console.log(e)
    })