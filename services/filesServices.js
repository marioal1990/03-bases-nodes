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
        var fileName = `messageFile-${number}.txt`;
        fs.writeFile(`./files/${fileName}`, message, function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(fileName);
            }
        });
    });
};

module.exports = {
    createFile
}