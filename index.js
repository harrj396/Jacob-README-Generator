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
        message: "Describe your project",
        name: "description",
    },

    {
        type: "input",
        message: "Add your GITHUB username",
        name: "username",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
