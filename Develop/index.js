// TODO: Include packages needed for this application
const { read } = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const promptUser = promptData => {
    promptData = [];
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
                message: 'Please enter a description of your project. (Required)',
                validate: projectdescInput => {
                    if (projectdescInput) {
                        return true;
                    } else {
                        console.log('You need to enter a description for your project!');
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'languages',
                message: 'What languages did you build your project with? (Check all that apply)',
                choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Please enter a guide describing how to install your project.'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please enter instructions and/or examples for using your project'
            },
            {
                type: 'input',
                name: 'githubLink',
                message: 'Please enter the GitHub link for your project. (Required)',
                validate: githubLinkInput => {
                    if (githubLinkInput) {
                        return true;
                    } else {
                        console.log('You need to enter the GitHub link to your project!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'projectImage',
                message: 'Please enter the relative paths of any screenshots of your project that you want to include.'
            },
            {
                type: 'input',
                name: 'credit',
                message: 'Please enter the name and link to the GitHub profile of a collaborator, if any.(Enter their name followed by their GitHub link, with a comma between the two ie "John Doe, https://github.com/JDoe")',
            },
            {
                type: 'confirm',
                name: 'creditConfirm',
                message: 'Would you like to add another collaborator?',
                default: false
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter an email address for people to contact you with questions.'
            }
        ])
        .then(answerData => {
            promptData.push(answerData);
            return promptData;
        });
};

const promptUsage = usageData => {
    usageData = [];
    return inquirer.prompt([{
                type: 'input',
                name: 'usageImage',
                message: 'Please enter the relative path of an image you want to include in your usage section.'
            },
            {
                type: 'confirm',
                name: 'usageImageConfirm',
                message: 'Would you like to add another image to your usage section?',
                default: false
            },
        ])
        .then(usageImageData => {
            usageData.push(usageImageData);
            if (usageImageData.usageImageConfirm) {
                return promptUsage(usageData);
            } else {
                return usageData;
            }
        });
};

const promptCredit = creditData => {
    creditData = [];
    return inquirer.prompt([{

    }])
}


promptUser()
    .then(promptUsage)
    .then(answerData => {
        console.log(answerData)
    });
//     .then(promptData => {
//         return createPage(promptData);
//     })


// // TODO: Create a function to write README file
// function writeToFile('./dist/README.md', readmeContent, err => {

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();