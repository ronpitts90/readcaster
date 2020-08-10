var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");

// 1. import generateMarkdown, and import fs

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your user name?",
    name: "title",
  },
  {
    type: "password",
    message: "What is your password?",
    name: "password",
  },
  {
    type: "password",
    message: "Re-enter password to confirm:",
    name: "confirm",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  //use fs module in order to call the write file function
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((results) => {
    console.log(results);

    //2. call the generateMarkdown function and past in results and put it in a variable

    var readmeTemplate = generateMarkdown(results);

    //3. call the writeTofile function and pass in the fileName -> "README.MD", and for data pass in the variable that you created that holds the generateMarkdown function from step2
  });
}

// function call to initialize program
init();
