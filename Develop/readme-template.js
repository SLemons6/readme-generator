// TODO: Create a function to generate markdown for README
function generateMarkdown(promptData) {
    return `
        # ${promptData.title}

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
        ${promptData.description}

        ## Built With
        ${promptData.languages}

        ## Installation
        ${promptData.installation}

        ## Usage
        ${promptData.usage}
        ${promptData.usageImage}

        ## Website/Links
        ${promptData.githubLink}
        ${promptData.projectImage}

        ## Credits
        ${promptData.creditName}

        ## Questions?
        If you have any questions, email me at ${promptData.email}.
`;
}

module.exports = generateMarkdown;