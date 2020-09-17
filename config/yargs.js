//parameters command methods
var parameters = {
    read: {
        fileName: {
            demand: true,
            alias: 'f',
            description: 'Nombre del archivo que debe encontrarse en la carpeta file - REF: messageFile-{number}.txt'
        }
    },
    create: {
        number: {
            demand: true,
            alias: 'n',
            description: 'Numeración en el nombre del archivo - REF: messageFile-{number}.txt - SOLO DÍGITOS'
        },
        message: {
            demand: false,
            alias: 'm',
            description: 'Mensaje que se va a grabar cuando se cree el archivo TXT. \n(Si no se usa, graba información de los usuarios con sus salarios)'
        }
    }
}

//argv configuration
const argv = require('yargs')
    .command('read', 'Lista en consola todo lo que está escrito en un archivo con el nombre messageFile-${number}.txt \nDebe encontrarse en la carpeta file/', parameters.read)
    .command('create', 'Crea archivo con los datos encontrados en la lista de Usuarios con sus salarios', parameters.create)
    .help()
    .argv;


module.exports = {
    argv
}