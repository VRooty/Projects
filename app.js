console.log("Hello World")


let Username = prompt('What's your name?')
    alert("Hi "+ Username +". Nice to meet you. Welcome to my site.")
    console.log ("User's name is " + Username)




function myFunction() {
  let answer1 = prompt("Is Vicky's surname Rooney?").toLowerCase();
  console.log("Vicky has 3 surnames")
}

while(answer1 !== "yes" || "no") {
    prompt("Don't be smart, answer properly.")
}


if(answer1=="No" || answer1=="Yes") {
    alert("Technically, yes and no. She has 3 surnames.")}
        

let answer2 = prompt("Does Vicky know Akkadian?")

while(answer2 !== "yes" || "no") {
    prompt("Don't be smart, answer properly.")
}

if ("no")
    alert("Right, though she wants to. No time though :(")
else:
    alert("no, that's not correct")
    console.log("User guessed" + answer2)

let answer3 = prompt("Vicky has a cat named Kira")

while(answer3 !== "yes" || "no") {
    prompt("Don't be smart, answer properly.")
}

if ("yes"): {
    alert("No, her cat is called Bo, short for Boadicea. Her Homuncula is Kira.")
if ("no"):
    alert("Yep, that's correct")
}

    console.log("User guessed" + answer2)

let answer4 = prompt("Vicky's favourite game on the PS2 is Silent Hill"){

while(answer4 !== "yes" || "no") {
    prompt("Don't be smart, answer properly.")

if ("yes": {
    alert("Correct, it's scary and psychological and the level design is gorgeous.")
if ("no": {
    alert("No, wrong, it's the perfect example of what games can achieve.")
})
})
}

let answer5 = prompt("Vicky would like to work for Google")

while(answer5 !== "yes" || "no") {
    prompt("Don't be smart, answer properly.")

if ("yes": {
    alert("No, not interesting enough.")
if ("no": {
    alert("Yes, not interesting enough")
})
})
}
}


let answer = 5;
let number = prompt("Guess a number");
let attempts = 4;

while (attempts > 1) {
    attempts--;
    if(number > answer) {
        alert("Too high!");
        number = prompt("Guess again. You have " + attempts)
    }

    alert()
}
