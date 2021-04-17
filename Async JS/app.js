// setTimeout(() => {
//     document.body.style.backgroundColor = "red"
// }, 1000)

// setTimeout(() => {
//     document.body.style.backgroundColor = "cyan"
// }, 2000)

// setTimeout(() => {
//     document.body.style.backgroundColor = "orange"
// }, 3000)

setTimeout(() => {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "cyan";
        setTimeout(() => {
            document.body.style.backgroundColor = "orange"
        }, 1000)
    }, 1000)
}, 1000)



