document.querySelector('button').addEventListener('click', function (holy) {
    console.log(holy)
})

const input = document.querySelector('input')
input.addEventListener('keydown', function () {
    console.log('KEYDOWN')
})
input.addEventListener('keyup', function () {
    console.log('KEYUP')
})