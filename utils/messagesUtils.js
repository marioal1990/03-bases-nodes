const colors = require('colors');

const MESSAGE_EXEC = 'EXEC: '.green;
const MESSAGE_ERROR = 'ERROR: '.red;
const MESSAGE_INPUT = 'INPUT: '.yellow;

/**
 * Método que imprime un mensaje en la consola
 * que corresponde a una ejecución (EXEC)
 * @param {*} message El mensaje que se va a imprimir
 */
const execMessage = (message) => {
    console.log(MESSAGE_EXEC + ' ' + message.green);
};

/**
 * Método que imprime un mensaje en la consola
 * que corresponde a un error (ERROR)
 * @param {*} message 
 */
const errorMessage = (message) => {
    console.log(MESSAGE_ERROR + ' ' + message.red);
};

/**
 * Método que imprime un mensaje en la consola
 * que corresponde a una entrada (INPUT)
 * @param {*} message 
 */
const inputMessage = (message) => {
    console.log(MESSAGE_INPUT + ' ' + message.yellow);
};

module.exports = {
    execMessage,
    errorMessage,
    inputMessage
}