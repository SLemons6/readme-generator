// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const PasswordPrompt = require('inquirer/lib/prompts/password');
const generateReadme = require('./src/readme-template');
const writeReadme = require('./utils/generateMarkdown');

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
        }
        ]);
};

const promptScreenshot = () => {
    const screenshots = [];
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'screenshotConfirm',
            message: 'Would you like to add a screenshot of your project?',
            default: true
        },
        {
            type: 'input',
            name: 'projectScreenshot',
            message: 'Please enter the relative path of the screenshot that you want to include.',
            when: ({ screenshotConfirm }) => screenshotConfirm
        },
        {
            type: 'confirm',
            name: 'confirmProjectAlt',
            message: 'Would you like to include alternative text for your image?',
            when: ({ screenshotConfirm }) => screenshotConfirm

        },
        {
            type: 'input',
            name: 'projectImageAlt',
            message: 'Please enter the alternative text for your project\'s image.',
            when: ({ confirmProjectAlt }) => confirmProjectAlt
        },
        {
            type: 'confirm',
            name: 'confirmAddScreenshot',
            message: 'Would you like to add another screenshot?',
            when: ({ screenshotConfirm }) => screenshotConfirm,
            default: false
        }
    ])
        .then(promptScreenshotData => {
            screenshots.push(promptScreenshotData)
            if (promptScreenshotData.confirmAddScreenshot) {
                return promptScreenshot()
                    .then(additionalScreenshots => {
                        return screenshots.concat(additionalScreenshots);
                    })
            } else {
                return screenshots;
            }
        });
};

const promptInstructions = () => {
    return inquirer.prompt([
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
    ]);
};
const promptUsageImage = () => {
    const usageImages = [];

    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'addUsageConfirm',
            message: 'Would you like to add an image to your usage section?',
            default: true
        },
        {
            type: 'input',
            name: 'usageImage',
            message: 'Please enter the relative path of an image you want to include in your usage section.',
            when: ({ addUsageConfirm }) => addUsageConfirm
        },
        {
            type: 'confirm',
            name: 'confirmUsageAlt',
            message: 'Do you want to include alternate text for your image?',
            default: true,
            when: ({ addUsageConfirm }) => addUsageConfirm
        },
        {
            type: 'input',
            name: 'UsageAltText',
            message: 'Please enter the alternative text for your usage\'s image.',
            when: ({ confirmUsageAlt }) => confirmUsageAlt
        },
        {
            type: 'confirm',
            name: 'confirmAddUsageImage',
            message: 'Would you like to add another image to your usage section?',
            when: ({ addUsageConfirm }) => addUsageConfirm,
            default: false
        }
    ])
        .then(usageImagePromptData => {
            usageImages.push(usageImagePromptData)
            if (usageImagePromptData.confirmAddUsageImage) {
                return promptUsageImage()
                    .then(additionalUsageImages => {
                        return usageImages.concat(additionalUsageImages);
                    })
            } else {
                return usageImages;
            }
        });
};

const promptCredits = () => {
    const credits = [];

    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'collaboratorConfirm',
            message: 'Do you have any collaborators to add?',
            default: true
        },
        {
            type: 'input',
            name: 'creditName',
            message: 'Please enter the name of a collaborator.',
            when: ({ collaboratorConfirm }) => collaboratorConfirm
        },
        {
            type: 'input',
            name: 'creditGithub',
            message: 'Please enter the Github link to the previously named collaborator.',
            when: ({ collaboratorConfirm }) => collaboratorConfirm
        },
        {
            type: 'confirm',
            name: 'addCollaboratorConfirm',
            message: 'Would you like to add another collaborator?',
            default: false,
            when: ({ collaboratorConfirm }) => collaboratorConfirm
        }
    ])
        .then(creditPromptData => {
            credits.push(creditPromptData)
            if (creditPromptData.addCollaboratorConfirm) {
                return promptCredits()
                    .then(additionalCredits => {
                        return credits.concat(additionalCredits)
                    })
            } else {
                return credits;
            }
        });
};

const promptEmail = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'email',
            message: 'Please enter an email address for people to contact you with questions.'
        }
    ]);
};

const promptLicense = () => {
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'license',
            message: 'What type of open source license do you want to include?',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'None']
        }
    ]);
};

// run app
promptProject()
    .then((project) => {
        return { project }
    })
    .then(promptData => {
        return promptScreenshot()
            .then(screenshots => {
                promptData.screenshots = screenshots;
                return promptData;
            })
    })
    .then(promptData => {
        return promptInstructions()
            .then(install => {
                promptData.install = install;
                return promptData;
            })
    })
    .then(promptData => {
        return promptUsageImage()
            .then(usage => {
                promptData.usage = usage;
                return promptData;
            })
    })
    .then(promptData => {
        return promptCredits()
            .then(credits => {
                promptData.credits = credits;
                return promptData;
            })
    })
    .then(promptData => {
        return promptEmail()
            .then(contact => {
                promptData.contact = contact;
                return promptData;
            })
    })
    .then(promptData => {
        return promptLicense()
            .then(license => {
                promptData.license = license;
                return promptData;
            })
    })
    .then(promptData => {
        console.log(JSON.stringify(promptData, null, 4));
        return generateReadme(promptData);
    })
    .then(readmeText => {
        console.log(readmeText);
        return writeReadme(readmeText)
    })
    .catch(err => {
        console.log(err);
    });
