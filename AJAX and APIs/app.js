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

const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get("https://icanhazdadjoke.com/", config)
    console.log(res.data.joke)
}

getDadJoke()