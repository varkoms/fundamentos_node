// Version ES
const hola = ((nombre, miCallback) => {
  setTimeout(() => {
    console.log(`Hola ${nombre}`);
    miCallback();
  }, 1000);
});

const adios = ((nombre, otroCallback) => {
  setTimeout(() => {
    console.log(`Adios ${nombre}`);
    otroCallback();
  }, 1000);
});

console.log(`Iniciando proceso ...`);
hola('Cesar', () => {
  adios('Cesar', () => {
    console.log('Terminando proceso ...');
  })
});


// function hola(nombre, miCallback) {
//   // console.log('Hola, soy una funcion asincrona');
//   setTimeout(() => {
//     console.log(`Hola ${nombre}`);
//     miCallback();
//   }, 1000);
// }

// function adios(nombre, otroCallback) {
//   setTimeout(() => {
//     console.log(`Adios ${nombre}`);
//     otroCallback()
//   }, 1000);
// }

// console.log(`Iniciando proceso ...`);
// hola('Cesar', function () {
//   adios('Cesar', function () {
//     console.log('Terminando proceso ...');
//   });
// });