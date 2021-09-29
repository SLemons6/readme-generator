// TODO: Include packages needed for this application
const { read } = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const userQuestions = userData => {
    // Create an array for the input data if there isn't one
    if (!userData.answer) {
        userData.answer = [];
    }
    return inquirer.prompt([{
                type: 'input',
                name: 'project-name',
                message: 'What is the name of your project? (Required)',
                validate: projectNameInput => {
                    if (projectNameInput) {
                        return true;
                    } else {
                        console.log('You need to enter a name for your project!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'project-description',
                message: 'Please enter a description of your project, '
            }
        ])
        .then(promptData => {
            userData.answer.push(promptData);
            return userData;
        });
};

userQuestions();


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();