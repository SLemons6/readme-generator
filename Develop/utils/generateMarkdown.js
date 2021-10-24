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

module.exports =  writeReadme;