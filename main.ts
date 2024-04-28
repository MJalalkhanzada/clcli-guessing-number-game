#! /usr/bin/env node
import inquirer from "inquirer"

let computerGuessedNumber= Math.floor(Math.random()*6+1);

let answer= await inquirer.prompt ([{
    name: "guessNumber",
    type: "number",
    message: "enter your  Guess  number between 1 to 6:",
    
}])
if(answer.guessNumber===computerGuessedNumber) {
    console.log("Congratulation you guessed it right")
} else {
    console.log("sorry you guessed it wrong")
}