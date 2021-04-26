// async function hello() {

// }

const sing = async () => {
    throw new Error("UH OH")
    return 'la la la'
}

sing()
    .then((data) => {
        console.log("Promise resolved with:", data)
    })
    .catch((err) => {
        console.log("OH NO, Promise Rejected")
        console.log(err)
    })