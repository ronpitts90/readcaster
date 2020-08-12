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
    name: "Description",
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
  {
    type: "input",
    message: "What is your Github username and profile link?",
    name: "Github",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "Email",
  },
];

// function to write README file
async function writeToFile(filename, data) {
  console.log(`writing file.. filename: ${filename}, data: ${data}`)
  //use fs module in order to call the write file function
  fs.writeFile(filename,data, function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  })

}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((results) => {
    console.log(results);

    //2. call the generateMarkdown function and pass in results and put it in a variable

    var readTemplate = generateMarkdown(results[0]);
    console.log(`readTemplate: ${Object.keys(results)}`)
    console.log(`readTemplate: ${Object.values(results)}`)

    //3. call the writeTofile function and pass in the fileName -> "README.MD", and for data pass in the variable that you created that holds the generateMarkdown function from step2
     writeToFile("README.md", readTemplate);

    return "success"
  });
}

// function call to initialize program
init();
// `Title: ${results.title}, License: ${results.License}`