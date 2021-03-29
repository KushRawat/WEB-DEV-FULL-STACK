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

// const password = prompt("Please enter a new password");

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid password")
//     } else {
//         console.log("Password cannot contain spaces")
//     }

// } else {
//     console.log("PASSWORD TOO SHORT! MUST BE 6+ CHARACTERS")
// }

// const password = prompt("Enter a password")

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("Valid Password")
// } else {
//     console.log("Incorrect format for password")
// }

// 0-5 free
// 5-10
// 10-65
// 65+


const age = 50;

if (age >= 0 && age < 5 || age >= 65) {
    console.log("Free")
} else if (age >= 5 && age < 10) {
    console.log("$10")
} else if (age >= 10 && age < 65) {
    console.log("$20")
} else {
    console.log("Invalid age")
}