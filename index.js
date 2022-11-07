// Packages needed for project
const inquirer = require('inquirer');
const MarkDown = require("./utils/generateMarkdown");
const fs = require("fs");
// Questions asked to generate README
const questions = [
    {
        type: "input",
        message: "What would you like to name your project?",
        name: "title",
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
        message: "Add your email to be contacted at",
        name : "email",
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

    {
        type: "list",
        message: "What type of license would you like?",
        choices: ["MIT", "Unlicense"],
        name: "license",
    }
];

// Function to write the README file
function writeToFile(data) {
    fs.writeFile("README.md", data, (err)  =>
    err ? console.log(err) : console.log("Creating README!")
    )
}

// Function to initialize the app
function init() {
    inquirer
        .prompt(questions)
        .then((results) => writeToFile (MarkDown (results)));

    }
// Function call to initialize app
init();
