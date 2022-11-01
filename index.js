// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const MarkDown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What would you like to name your project?",
        name: "Title",
    },
    
    {
        type: "input",
        message: "Add your GITHUB username",
        name: "username",
    },
    
    {
        type: "input",
        message: "Add your GITHUB Repo name",
        name: "repo",
    },
    
    {
        type: "input",
        message: "Describe your project",
        name: "description",
    },

    {
        type: "input",
        message: "Describe how to install your project",
        name: "install"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + "README.md", data, (err) ) =>
    err ? console.log(err) : console.log("Creating README!"); 
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((results) => writeToFile(response.name.project, results));
}
// Function call to initialize app
init();
