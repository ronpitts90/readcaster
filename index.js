var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
var fs = require("fs");

// 1. import generateMarkdown, and import fs

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of this project?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your project.",
    name: "description",
  },
  {
    type: "input",
    message: "How do you install the project?",
    name: "Installation",
  },
  {
    type: "input",
    message: "What is the usage?",
    name: "Usage",
  },
  {
    type: "input",
    message: "What are the contibution guidelines?",
    name: "Contributing",
  },
  {
    type: "input",
    message: "What are the testing instructions?",
    name: "Tests",
  },
  {
    type: "input",
    message: "What kind of license would you like your project to have?",
    name: "License",
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

    //2. call the generateMarkdown function and pass in results and put it in a variable

    var readTemplate = generateMarkdown(results);

    //3. call the writeTofile function and pass in the fileName -> "README.MD", and for data pass in the variable that you created that holds the generateMarkdown function from step2
    function writeToFile(README , readTemplate) {
     
    }

  });
}

// function call to initialize program
init();
