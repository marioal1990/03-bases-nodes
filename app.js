const { createFile } = require('./services/filesServices');
const { getSalaryByUser, getUsers } = require('./services/userServices');
// const { toCamelCase } = require('./utils/stringUtils');

let argv = process.argv;
let parameter = argv[2];
console.log(parameter);
console.log(parameter);

var messages = "";
getUsers().forEach(user => {
    let message = getSalaryByUser(user);
    message = `Nombre: ${message.names}\nSalario: ${message.salary}\n`;
    messages += message;
});

createFile(messages, parameter)
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject));