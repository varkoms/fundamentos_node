// const process = require('process');

process.on('beforeExit', () => {
  console.log(`El proceso va a terminar`);
});

process.on('uncaughtException', (err, origen) => {
  console.error(`Vaya, algo salio mal > ${err}`);
  setTimeout(() => {
    console.log(`Esto viene desde las excepciones`);
  }, 0);
})

process.on('exit', () => {
  console.log(`El proceso ha terminado`);
  // Esto no se ejecuta, ya que el proceso ya ha terminado.
  setTimeout(() => {
    console.log(`Esto no deberia de ejecutarse`);
  }, 0);
});


metodoQueNoExiste();