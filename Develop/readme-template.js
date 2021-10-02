// TODO: Create a function to generate markdown for README
// create the project info section
const generateAbout = projectDataArr => {
    return `
    ${projectDataArr
            .map(({ projectName, projectDescription, languages, githubLink, }) => {
                return `

                # ${ projectName }

    ## Table of Contents
        
        * Description 
        * Built With 
        * Website 
        * Installation 
        * Usage 
        * Credits 
        * Questions 
        * License

    ## Description
    ${ projectDescription }

    ##
    Built With
    ${ languages.join(',') }

    ##
    Website / Links
    ${ githubLink }
    `;
            })
        }
    `
};
// create the screenshot section
const generateScreenshot = screenshotDataArr => {
    return `
            ${screenshotDataArr
            .map(({ projectScreenshot, projectImageAlt }) => {
                return ` 
                <a href = "${projectScreenshot}" alt = "${projectImageAlt}" / >
        `;
            })
            .join('')
        }
        `
};
// create the installation section
const generateInstall = installText => {
    return `
        ## Installation
        ${installText}
`;
};
// create the usage section
const generateUsage = usageText => {
    return `
            ## Usage
            ${usageText}
            `;
};

const generateUsageImage = usageImageArr => {
    return `
    ${usageImageArr
            .map(({ usageImage, usageAltText }) => {
                return ` 
                <a href = "${usageImage}" alt = "${usageAltText}" / >
        `;
            })
            .join('')
        }
    `
};
// create the credits section
const generateCredits = creditsArr => {
    return `
    ${creditsArr
            .map(({ creditName, creditGithub }) => {
                return `
    ${ creditName }, ${ creditGithub }
    `;
            })
            .join('')
        }
`
};
// create the questions/contact section
const generateEmail = emailText => {
    return ` 
    ## Questions
    If you have any questions, email me at ${emailText}.
    `;
};

// create the license section

// export function to create README
module.exports = markdownTemplate => {
    // organize page data by section
    const { about, screenshots, install, usage, usageImage, credits, questions } = markdownTemplate;

    return `
${generateAbout(about)}
${generateScreenshot(screenshots)}
${generateInstall(install)}
${generateUsage(usage)}
${generateUsageImage(usageImage)}
## Credits
${generateCredits(credits)}
${generateEmail(questions)}
`;
};