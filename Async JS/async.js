// async function hello() {

// }


// const sing = async () => {
//     throw new Error("UH OH")
//     return 'la la la'
// }

// sing()
//     .then((data) => {
//         console.log("Promise resolved with:", data)
//     })
//     .catch((err) => {
//         console.log("OH NO, Promise Rejected")
//         console.log(err)
//     })
const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials';
    if (password === 'howyoudoin') return 'WELCOME';
    throw 'Invalid Password';
}

login('godkush','howyoudoin')
    .then((msg) => {
        console.log('Logged In!')
        console.log(msg)
    })
    .catch((err) => {
        console.log('Error!!')
        console.log(err)
    })