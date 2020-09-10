const fs = require('fs');

/**
 * Method for write text param on txt file
 * @param {*} message Text for file param
 */
var createFile = (message) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./files/garoFileExample.txt', message, function(err) {
            if (err) {
                reject(err);
            } else {
                resolve('File create on files/garoFileExample.txt success..');
            }
        });
    });
};

module.exports = {
    createFile
}