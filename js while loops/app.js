// let num = 0
// while (num < 10) {
//     num++;
//     console.log(num);
// }

const SECRET = 'babyjesus'

let guess = prompt("Enter secret passcode...");

while (guess !== SECRET) {
    guess = prompt('Guess again...')
}

console.log('Congrats, you may enter...')