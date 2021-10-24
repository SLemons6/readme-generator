// TODO: Create a function to generate markdown for README
// create the project info section
const generateProject = projectInfo => {
    console.log("Project", projectInfo)
    if (!projectInfo) {
        return '';
    }
    const { projectName, projectDescription, languages, githubLink, } = projectInfo;
    return `

# ${projectName}

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
${projectDescription}

## Built With
${languages.map(language => language).join(', ')}

## Website / Links
GitHub:${githubLink}
    `.trim();

};

const generateScreenshot = screenshotArr => {
    if (!screenshotArr) {
        return '';
    }
    return `
${screenshotArr
            .map(({ projectScreenshot, projectImageAlt }) => {
                return ` 
<img src="${projectScreenshot}" alt="${projectImageAlt}"/>
        `.trim();
            })
            .join('')
        }
`.trim();
};

const generateInstructions = instructionsInfo => {
    if (!instructionsInfo) {
        return '';
    }
    const { installation, usage } = instructionsInfo;
    return `
                
## Installation
${installation}

## Usage
${usage}
    `.trim();
};

const generateUsageImage = usageArr => {
    if (!usageArr) {
        return '';
    }
    return `
    ${usageArr
            .map(({ usageImage, usageAltText }) => {
                return ` 
                <img src="${usageImage}" alt="${usageAltText}" / >
        `.trim();
            })
            .join(' ')
        }
`.trim();
};

const generateCredit = creditArr => {
    if (!creditArr) {
        return '';
    }
    return `
## Credits
${creditArr
            .map(({ creditName, creditGithub }) => {
                return `
${creditName}, ${creditGithub}
    `.trim();
            })
            .join('')
        }
`.trim();
};

const generateContact = contactInfo => {
    if (!contactInfo) {
        return '';
    }
    const { email } = contactInfo;
    return `
## Questions
If you have any questions, email me at ${email}.
    
`.trim();
};

// create the license section

const generateLicense = (licenseInfo) => {
    if (!licenseInfo) {
        return '';
    }
    const { license } = licenseInfo;
    return `

## License
${license}   
    `.trim();

};

const generateReadme = (markdownInfo) => {
    // organize page data by section
    const { project, screenshots, install, usage, credits, contact, license } = markdownInfo;

    return `
${generateProject(project)}

${generateScreenshot(screenshots)}


${generateInstructions(install)}

${generateUsageImage(usage)}


${generateCredit(credits)}
 
${generateContact(contact)}

${generateLicense(license)}

`;
};

// export function to create README
module.exports = generateReadme;
