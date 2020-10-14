// Semana 2 - Clase 2

// set population limit of aquarium to 10

// const popLimit = 10;

// Start off with 0 fish

// let fish = 0;

//  initiate loop to run unit fish reaches population limit

// while (fish < popLimit) {
//     // add one fish for each iteration
//     fish++;
//     console.log(`There's room for ${popLimit - fish} more fish.`)
// }
// Set a condition to true
// let iceCapsAreMelting = true;
// let polarBears = 5;

// // initiate infinite loop
// while (iceCapsAreMelting) {
//     console.log(`There's are ${polarBears} polar bears.`);
//     polarBears--;
//     // Terminate infinite loop when following condition is true
//     if(polarBears === 0) {
//         console.log("There are no polar bears left.");
//         break;
//     }
// }

// Set variable to 0

// let x = 0;

// do {
//     // Increment variable by 1
//     x++;
//     console.log(x)
// } while (false)

// let rands = [];
// let count = 0;
// const size = 10;

// while(count < size) {
//     rands.push(Math.round(Math.random() * 10));
//     count ++;
//     console.log(`The current size  of the array is ${count}`)
// }

// console.log(rands)

// let count = 0;

// do {
//     count++
//     console.log(`Count is: ${count}`)
// } while (count < 10);

// generate secret number is a random integer between 1 and 12

// const MIN = 1;
// const MAX = 12

// let secretNumber = Math.floor(Math.random() * (MAX - MIN +1)) + MIN;

// // for storing the number of guesses
// let guesses = 0;
// // for storing hint
// let hint = '';
// let number = 0;

// do {
//     // get input for user
//     let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);
//     // get the integer
//     number = parseInt(input);
//     // increase the number of guesses
//     guesses++;
//     // check input number with the secret number
//     // provide hint if needed
//     if (number > secretNumber) {
//         hint = `, and less than ${number}`
//     } else if (number < secretNumber) {
//         hint = `, and greater than ${number}`
//     } else if (number == secretNumber) {
//         alert(`Bravo you're correct after ${guesses} guess(es).`);
//     }
// } while(number !== secretNumber)
let iterations = 0;
top: for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        iterations++;
        if( i === 2 && j === 2) {
            break top;
        }
    }
}
console.log(iterations);