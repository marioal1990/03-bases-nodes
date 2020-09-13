const fs = require('fs');

/**
 * Método que crea un archivo txt y lo llena con datos
 * @param {*} message Mensaje con datos que serán guardados en el 
 *                    TXT creado
 * @param {*} number Número que corresponde al indice que 
 *                   estará en el archivo TXT
 */
var createFile = (message, number) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./files/messageFile${number}.txt `, message, function(err) {
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