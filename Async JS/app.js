// setTimeout(() => {
//     document.body.style.backgroundColor = "red"
// }, 1000)

// setTimeout(() => {
//     document.body.style.backgroundColor = "cyan"
// }, 2000)

// setTimeout(() => {
//     document.body.style.backgroundColor = "orange"
// }, 3000)

// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "cyan";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "orange"
//         }, 1000)
//     }, 1000)
// }, 1000)



const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext()
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('green', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('orange', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                    delayedColorChange('teal', 1000, () => {
        
                    })
                })
            })
        })  
    })
} )