const fs = require('fs');
const writeReadme = readmeContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', readmeContent, err => {
            // reject the Promise and send error to 'catch()' if needed 
            if (err) {
                reject(err);
                // return out of function to prevent resolve function
            }
            // resolve promise if no issues were encountered and send info to '.then()' function
            resolve({
                ok: true,
                message: 'Readme successfully created!'
            });
        });
    });
};



// // TODO: Create a function that returns a license badge based on which license is passed in


// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

module.exports = writeReadme;