const btn = document.querySelector('#v2')

btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED")
}

btn.onmouseenter = function () {
    console.log("AHHHHH")
}

document.querySelector('h1').onclick = () => alert('YOU CLICKED THE H1')