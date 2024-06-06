#!/usr/bin/env node
  import inquirer from "inquirer";
  import chalk from "chalk";
   
  const userAns:{
    sentence :string
  }= await inquirer.prompt(
    [
        {
            name:"sentence",
            type :"input",
            message:"Enter your sentence to count the word:"
        }
    ]
  )
const words = userAns.sentence.trim().split(" ")
console.log(words)
console.log(`your sentence word count is ${words.length}`)