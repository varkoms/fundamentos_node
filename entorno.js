// Definir variables de entorno que NO vayan en el codigo

// Usando .dotenv (npm package) podemos acceder a las variables de entorno
// manteniendo definidas las variables en un archivo separado (.env)
require('dotenv').config();


let nombre = process.env.NOMBRE || 'Sin nombre'; // Definimos la variable de entorno con process.env
let web = process.env.WEB || 'Ninguna, no tengo'; // Definimos la variable de entorno con process.env
console.log(`Hola ${nombre}`);
console.log(`Mi web es ${web}`);

// 1. Definirla en la linea de comandos con
//    NOMBRE=Carlos node entorno.js
// 2. Con los pipes (||), podemos definir un valor por defecto