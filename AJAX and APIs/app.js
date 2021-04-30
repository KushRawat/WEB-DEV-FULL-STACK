// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log("ITS AN ERRROR!!!!", err)
//     })

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log("ERROR!!", e)
    }
}

// fetchBitcoinPrice()

const button = document.querySelector('button')
const jokes = document.querySelector('#jokes')

const addNewJoke = async() => {
    const jokeText = await getDadJoke()
    const newLI = document.createElement('LI')
    newLI.append(jokeText)
    jokes.append(newLI)
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        return res.data.joke
    } catch(e) {
        return "No Jokes Available! Sorry :("
    }
}

button.addEventListener('click', addNewJoke)
// getDadJoke()