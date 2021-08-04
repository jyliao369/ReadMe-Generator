// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        // Name of the project
        name: 'title',
        type: 'input',
        message: 'Whats the name of the project?'
    },
    {
        // Description of Project
        name: 'Description',
        type: 'input',
        message: 'Describe your project idea.'
    },
    {
        // Any technologies used?
        name: 'dependencies',
        type: 'input',
        message: 'What kind of technology did you use?'
    },
    {
        // What is it for?
        name: 'use',
        type: 'input',
        message: 'Who and what is it for?'
    },
    {
        // Any license
        name: "license",
        type: 'input',
        message: 'Did you use any license?'
    },
    {
        // Who contributed
        name: 'Contributions',
        type: 'input',
        message: 'Did anybody help you?'
    },
    {
        name: 'test',
        type: 'input',
        message: "How did you test the App?"
    },
    {
        // Github
        name: 'github',
        type: 'input',
        message: "What is your Github?"
    },
    {
        // Email
        name: 'email',
        type: 'input',
        message: "What is your email?"
    }
];

// TODO: Create a function to write README file
const writeFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName),
        console.log(data),
        err ? console.log(err) : console.log("README.md has been created")
    })
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
        .then(function(data) {
            writeFile("README.md", generatemMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();
