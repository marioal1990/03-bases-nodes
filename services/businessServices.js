const filesServices = require('./filesServices');
const userServices = require('./userServices');
const stringUtils = require('../utils/stringUtils');
const messagesUtils = require('../utils/messagesUtils');

/**
 * Método que crea un archivo txt con el mensaje que se entrega en el parametro message
 * o si no viene nada, escribe la información de los usuarios en un arreglo con sus salarios
 * @param {*} message El mensaje entregado desde el parametro
 * @param {*} number El número correlativo que va dentro del nombre del archivo
 */
let create = (message, number) => {
    messagesUtils.inputMessage(`Parámetros introducidos [number: ${number}] [message: ${message}]`);
    if (!stringUtils.validateInputNumber(number)) {
        var messages = "";
        if (message === undefined) {
            userServices.getUsers().forEach(user => {
                let userData = userServices.getSalaryByUser(user);
                if (userData != undefined) {
                    userData = `Nombre: ${userData.names}\nSalario: ${userData.salary}\n`;
                    messages += userData;
                } else {
                    messagesUtils.errorMessage(`No se ha encontrado el salario para el usuario ${ user.names }`);
                }
            });
        } else {
            messages = message;
        }

        filesServices.createFile(messages, number)
            .then(resolve => messagesUtils.execMessage(`Creando el archivo ${resolve}`))
            .catch(reject => messagesUtils.errorMessage(reject));
    } else {
        messagesUtils.errorMessage(`El campo number no puede estar vacio y debe ser dígitos`);
    }
};

/**
 * Método que imprime por consola los datos que se obtienen en un archivo TXT
 * guardada en la carpeta de nombre files
 * @param {*} name El nombre del archivo a llamar. REF: messageFile-{number}.txt
 */
let read = (name) => {
    messagesUtils.inputMessage(`Parámetros introducidos [name: ${name}]`);
    if (stringUtils.validateInputName(name)) {
        messagesUtils.execMessage(`DO SOMETHING`);
    } else {
        messagesUtils.errorMessage(`El campo name no puede estar vacio`);
    }
}

module.exports = {
    create,
    read
}