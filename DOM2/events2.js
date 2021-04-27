document.querySelector('button').addEventListener('click', function (holy) {
    console.log(holy)
})

const input = document.querySelector('input')
input.addEventListener('keydown', function (evt) {
    console.log(evt.key)
    console.log(evt.code)
})
// input.addEventListener('keyup', function () {
//     console.log('KEYUP')
// })