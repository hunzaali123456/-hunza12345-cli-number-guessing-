#! /usr/bin/env node

import inquirer from "inquirer";




const randamNumber = Math.floor(Math.random() * 6 + 1);



const answers = await inquirer.prompt([
{
    name:"UserGuessedNumber",
    type: "number",
    message:"please guess a number between 1-6 :",
  },
]);

if(answers.userGuessedNumber === randamNumber ) {
    console.log("congratulations! you guessed right number.");
    
} else {
    console.log("You guessed wrong number");
    
}


