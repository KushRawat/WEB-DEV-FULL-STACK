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


// const age = 50;

// if (!(age >= 0 && age < 5 || age >= 65)) {
//     console.log("You are not a baby or a senior")
// }

// const day = 5;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//     case 4:
//         console.log("Thursday");
//     case 5: 
//     case 6:
//         console.log("Weekend");
//         break;
//     default:
//         console.log("I don't know that");
// }

// for (let i = 100; i = 0; i -= 10) {
//     console.log(i)
// }
// for (let i = 10; i <= 1110; i *= 10) {
//     console.log(i)
// }

// for (let i = 1; i <= 10; i++ ) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j <=3; j++) {
//         console.log(`   j is: ${j}`)
//     }
// }

// const table = [
//     ["eric", "abbloo", "stan"],
//     ["sifty", "laloo", "erica"],
//     ["snoop", "dre", "emi"]
// ]

// for (let i = 0; i < table.length; i++) {
//     const row = table[i]
//     console.log(`#ROW ${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// let count = 0;
// while (count <10) {
//     count++;
//     console.log(count)
// }

// const SECRET = "BabyHippo";

// let guess = prompt("Enter the secret code");
// while (guess !== SECRET) {
//     guess = prompt("Enter the secret code")
// }
// console.log("Congrats You got the secret")  

// let input = prompt("Hey, say something!");
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") {
//         break;
//     }
// }
// console.log("Ok you win")

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

                    // Generating a random number by taking input

// let maximum = parseInt(prompt("Enter the maximum number!")); 
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!")); 
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

//                     // taking guess

// let guess = parseInt(prompt("Enter your first guess"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess");
//     } else {
//         guess = prompt("Too low! Enter a new guess")
//     }
// }
// if (guess === "q") {
//     console.log("OK, You Quit")
// } else {
//     console.log("Congrats You Win")
//     console.log(`You got it in ${attempts} guesses.`)
// } 

// const table = [
//     ["eric", "abbloo", "stan"],
//     ["sifty", "laloo", "erica"],
//     ["snoop", "dre", "emi"]
// ]

// for (let row of table) {
//     for (let student of row) {
//         console.log(student)
//     }
// }

// for (let char of "Hello World") {
//     console.log(char)
// }

//  let table = {
//      yolo : 12,
//      bolo : 234,
//      golo : 234,
//  }

//  for (let person in table) {
//      console.log(person, table[person])
//  }


//  let total = 0;
//  let count = 0;
//  for (let score of Object.values(table)) {
//     count++
//     total += score;
// }
// console.log(total)
// console.log(count)

// function singSong() {
//     console.log("DO")
//     console.log("RE")
//     console.log("MI")
// }

// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}!`)
// }

// let bird = "parrot"

// function birdWatch() {
//      bird = "green parrot"
// }
 
// birdWatch()
// console.log(bird)

// const add = function(x,y) {
//      return x + y
// }

// function multiply(f) {
//      f()
// }

// function number() {
//      console.log("ayyy")
// }

function makeMysteryFunc() {
     const rand = Math.random()
     if (rand > 0.5) {
          return function() {
               console.log("Ayo")
               console.log("Ayo!!")
          }
     } else {
          return function() {
               alert("Whoaa!!")
               alert("Whoaa!!!!")
          }
     }
}

function isBetween(num) {
     return num >= 50 && num <= 100
}

function makeBetweenFunc(min, max) {
     return function(num) {
          return num >= min && num <= max;
     }
}

