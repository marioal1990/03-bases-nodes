const businessServices = require('./services/businessServices');
const argv = require(`./config/yargs`).argv;
const messagesUtils = require('./utils/messagesUtils');

let parameter = argv;
let command = argv._[0];

console.log(`***********************************`.bgGreen.black);
console.log(`          NODEJS EXAMPLE          *`.bgGreen.black);
console.log(`       Author: SuperMario90       *`.bgGreen.black);
console.log(`***********************************`.bgGreen.black);

switch (command) {
    case 'read':
        messagesUtils.execMessage(`MÉTODO QUE LISTA`);
        businessServices.read(parameter.fileName);
        break;
    case 'create':
        messagesUtils.execMessage(`MÉTODO QUE CREA`);
        businessServices.create(parameter.message, parameter.number);
        break;
    default:
        messagesUtils.execMessage(`SE EJECUTA OTRO MÉTODO`);
}