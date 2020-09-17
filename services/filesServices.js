const fs = require('fs');

const FILE_PATH = "./files/";

/**
 * Método que crea un archivo txt y lo llena con datos
 * @param {*} message Mensaje con datos que serán guardados en el 
 *                    TXT creado
 * @param {*} number Número que corresponde al indice que 
 *                   estará en el archivo TXT
 */
const createFile = (message, number) => {
    return new Promise((resolve, reject) => {
        var fileName = `messageFile-${number}.txt`;
        fs.writeFile(FILE_PATH + fileName, message, function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(fileName);
            }
        });
    });
};

/**
 * Método que lee un archivo txt y lo imprime por consola
 * @param {*} fileName El nombre del archivo. Ejem: messageFile-69.txt
 */
const readFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(FILE_PATH + fileName, 'utf8', function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = {
    createFile,
    readFile
}