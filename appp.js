// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5")
//     console.log(random)
// }

// const dayOfWeek = 'Friday';

// if (dayOfWeek === 'Monday') {
//     console.log("UGGHH I hate mondays")
// } else if (dayOfWeek === 'Saturday') {
//     console.log('Yay I Love Saturdays! ')
// } else if (dayOfWeek === 'Friday') {
//     console.log('Fridays are decent. Especially after work')
// } 

const password = prompt("Please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid password")
    } else {
        console.log("Password cannot contain spaces")
    }

} else {
    console.log("PASSWORD TOO SHORT! MUST BE 6+ CHARACTERS")
}