console.log("It's working!!!")

if(1+1===2) {
    console.log("Math makes sense");
}

if(1+1!==3) {
    console.log("Math really does make sense");
}

let random = Math.random();
if (random <= 0.5) {
    console.log("Your number is less than 0.5!!!!")
    console.log(random)
}

if (random >= 0.5) {
    console.log("Your number is greater than 0.5!!!!")
    console.log(random)
}

let rating = prompt("what's your rating?").toLowerCase;

if (rating > 5) {
    console.log("rating is more than 5")
}

else if (rating < 5) {
    console.log("rating is less than 5")
}