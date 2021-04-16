// const allImages = document.getElementsByTagName('img')

// for(let img of allImages) {
//     console.log(img.src)
// }

// const squareImages = document.getElementsByClassName('square') 

// for (let img of squareImages) {
//     img.src = '';
// }

// const links = document.querySelectorAll('p a')

// for (let link of links) {
//     console.log(link.href)
// }

// const links = document.querySelectorAll('a')

// for (let link of links) {
//     console.log(link)
// }

const allLinks = document.querySelectorAll('a')

for (let link of allLinks) {
    link.style.color = 'rgb(12, 82, 3)'
    link.style.textDecorationColor = 'solid green'
    link.style.textDecorationStyle = 'wavy'
}