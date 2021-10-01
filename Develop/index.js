// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const writeReadme = require('./utils/generateMarkdown');
// const generateMD = require('./readme-template.js');
const promptProject = () => {
    // Add a 'project' array property if there isn't one already
    return inquirer.prompt([{
            type: 'input',
            name: 'projectName',
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
            name: 'projectDescription',
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
            name: 'installation',
            message: 'Please enter a guide describing how to install your project.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter an email address for people to contact you with questions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter instructions for using your project'
        }
    ]);
};


const promptUsage = usageData => {
    // Add 'usage' array property if there isn't one already
    if (!usageData.images) {
        usageData.images = [];
    }
    return inquirer.prompt([{
                type: 'input',
                name: 'usageImage',
                message: 'Please enter the relative path of an image you want to include in your usage section.'
            },
            {
                type: 'confirm',
                name: 'addImageConfirm',
                message: 'Would you like to add another image to your usage section?',
                default: false
            }
        ])
        .then(usageImageData => {
            usageData.images.push(usageImageData);
            if (usageImageData.addImageConfirm) {
                return promptUsage(usageData);
            } else {
                return usageData;
            }
        });
};

const promptScreenshot = screenshotData => {
    // Add 'screenshot' array property if there isn't one already
    if (!screenshotData.images) {
        screenshotData.images = [];
    }
    return inquirer.prompt([{
                type: 'input',
                name: 'projectImage',
                message: 'Please enter the relative paths of any screenshots of your project that you want to include.'
            },
            {
                type: 'confirm',
                name: 'addScreenshotConfirm',
                message: 'Would you like to add another image to your project?',
                default: false
            }
        ])
        .then(projectImageData => {
            screenshotData.images.push(projectImageData);
            if (projectImageData.addScreenshotConfirm) {
                return promptScreenshot(screenshotData);
            } else {
                return screenshotData;
            }
        });
};

const promptCredit = creditData => {
    // Add 'credit' array property if there isn't one already
    if (!creditData.credits) {
        creditData.credits = [];
    }
    return inquirer.prompt([{
                type: 'confirm',
                name: 'confirmAddCollaborator',
                message: 'Do you have any collaborators to add your README?',
                default: false
            },
            {
                type: 'input',
                name: 'creditName',
                message: 'Please enter the name of a collaborator..',
                when: ({ confirmAddCollaborator }) => confirmAddCollaborator
            },
            {
                type: 'input',
                name: 'creditGithub',
                message: 'Please enter the Github link to the previously named collaborator.'
            },
            {
                type: 'confirm',
                name: 'addCreditConfirm',
                message: 'Would you like to add another collaborator?',
                default: false
            }
        ])
        .then(collaboratorData => {
            creditData.credits.push(collaboratorData);
            if (collaboratorData.addCreditConfirm) {
                return promptCredit(creditData);
            } else {
                return creditData;
            }
        })
};

const promptLicense = () => {
    return inquirer.prompt([{
        type: 'checkbox',
        name: 'license',
        message: "What type of open source do you want to include?",
        choices: ['GNU AGPLv3', 'GUN GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'None']
    }])
}


promptProject()
    .then(promptUsage)
    .then(promptScreenshot)
    .then(promptCredit)
    .then(promptLicense)
    .then(userData => {
        console.log(userData)
    })
    .then(readmeText => {
        return writeReadme(readmeText);
    })
    .catch(err => {
        console.log(err);
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