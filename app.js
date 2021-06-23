const { crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

const colors = require('colors');



console.clear();

crearArchivo(argv.base, argv.listar, argv.h)
    .then (nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));