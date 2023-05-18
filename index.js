// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project including what your motivation was, why you built it, what problem it solves, and what you learned.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache2.0', 'GPL3.0', 'BSD3', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide any contributors to your project with links to their GitHub profiles.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any tests for your project and information on how to run them.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.',
    },
    {   
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({ ...answers }));
    }   
    );
}

// Function call to initialize app
init();
