// TODO: Create a function to generate markdown for README
// create the project info section
const generateProjectAbout = userData => {
    return `
        # ${userData.projectName}

        ## Table of Contents
        * Description
        * Built With
        * Installation
        * Usage
        * Website/Links
        * Credits
        * Questions
        * License

        ## Description
        ${userData.projectDescription}

        ## Built With
        ${userData.languages}

        ## Installation
        ${userData.installation}

        ## Usage
    `;
};

// create the usage section
const generateUsage = usageArray => {
    return `
    ${usageArray
            .map(({ usageImage }) => {
                return ` <
        a href = "${usageImage}" > < /a>
    `;
            })
            .join('')}
    `;
};

// create the links section
const generateLinks = userData => {
    return `
    ## Website / Links
    ${userData.githubLink}
    `;
};

// create the project images section
const generateScreenshot = screenshotArray => {
    return `
    ${screenshotArray
            .map(({ projectImage }) => {
                return ` <
        a href = "${projectImage}" > < /a>
    `;
            })
            .join('')}
    `;
};

// create the credits section
const generateCredits = creditsArr => {
    if (!confirmAddCollaborator) {
        return `''`;
    }

    return `
    ## Credits
    ${creditsArr
            .map(({ creditName, creditGithub }) => {
                return `
    $ { creditName }, $ { creditGithub }
    `;
            })
            .join('')}
    `;
};

// create the questions section
const generateQuestions = userData => {
    return `
    ## Questions ?

    If you have any questions, email me at ${userData.email}.
    `
};

// export function to create README
module.exports = markdownTemplate => {
    // organize page data by section
    const { about, usage, links, screenshots, credits, questions } = markdownTemplate;

    return `

    ${generateProjectAbout(about)}
    ${generateUsage(usage)}
    ${generateLinks(links)}
    ${generateScreenshot(screenshots)}
    ${generateCredits(credits)}
    ${generateQuestions(questions)}
    `;
};