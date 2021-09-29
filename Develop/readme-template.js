// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
        # ${data.title}

        ## Table of Contents
        * Description
        * Built With
        * Installation
        * Usage
        * Website/Links
        * Questions
        * Credits
        * License

        ## Description
        ${data.description}

        ## Built With
        ${data.languages}

        ## Installation
        ${data.installation}

        ## Usage
        ${data.usageInput}

        ## Website/Links
        ${data.githubLink}
        ${data.websiteLink}
        ${data.websiteImage}

        ## Credits
        ${data.creditInput}

        ## Questions?
        If you have any questions, email me at ${data.Email}.
`;
}

module.exports = generateMarkdown;