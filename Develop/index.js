// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const writeReadme = require('./utils/generateMarkdown');
const userData = [];
// const generateMD = require('./readme-template.js');
const promptProject = () => {
    return inquirer.prompt(
        [{
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
                type: 'editor',
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
                type: 'recursive',
                name: 'screenshotPrompt',
                message: 'Do you have any screenshots to add to your project?',
                prompts: [{
                        type: 'input',
                        name: 'projectScreenshot',
                        message: 'Please enter the relative paths of any screenshots of your project that you want to include.'
                    },
                    {
                        type: 'confirm',
                        name: 'confirmProjectAlt',
                        message: 'Would you like to include alternative text for your image?'
                    },
                    {
                        type: 'input',
                        name: 'projectImageAlt',
                        message: 'Please enter the alternative text for your project\'s image.',
                        when: ({ confirmProjectAlt }) => confirmProjectAlt
                    },
                ]
            },
            {
                type: 'editor',
                name: 'installation',
                message: 'Please enter a guide describing how to install your project.'
            },
            {
                type: 'editor',
                name: 'usage',
                message: 'Please enter instructions for using your project.'
            },
            {
                type: 'recursive',
                name: 'usageImagePrompt',
                message: 'Do you have any images to add to your usage section?',
                prompts: [{
                        type: 'input',
                        name: 'usageImage',
                        message: 'Please enter the relative path of an image you want to include in your usage section.'
                    },
                    {
                        type: 'confirm',
                        name: 'confirmUsageAlt',
                        message: 'Do you want to include alternate text for your image?',
                        default: true
                    },
                    {
                        type: 'input',
                        name: 'UsageAltText',
                        message: 'Please enter the alternative text for your usage\'s image.',
                        when: ({ confirmUsageAlt }) => confirmUsageAlt
                    }
                ]
            },
            {
                type: 'recursive',
                name: 'collaboratorPrompt',
                message: 'Do you have any collaborators to add your README?',
                prompts: [{
                        type: 'input',
                        name: 'creditName',
                        message: 'Please enter the name of a collaborator..',
                    },
                    {
                        type: 'input',
                        name: 'creditGithub',
                        message: 'Please enter the Github link to the previously named collaborator.',
                    },
                ],
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter an email address for people to contact you with questions.'
            },
            {
                type: 'checkbox',
                name: 'license',
                message: 'What type of open source license do you want to include?',
                choices: ['GNU AGPLv3', 'GUN GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'None']
            }
        ]);
};

// run app
promptProject()
    .then((answers) => {
        userData.push(answers);
    })
    .then(userData => {
        return writeReadme(userData);
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