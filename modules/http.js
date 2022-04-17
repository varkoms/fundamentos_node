const http = require('http');

const router = (req, res) => {
  console.log('Nueva peticion');
  console.log(req.url);

  switch (req.url) {

    case '/':
      res.write(`Bienvenido`);
      break;

    case '/hola':
      res.write(`Hola, que tal?`)
      break;

    default:
      res.write(`Error 404: Site not found`);
  }

  // // Header
  // res.writeHead(201, {
  //   'Content-Type': 'text/plain'
  // });

  // // Escribir respuesta al usuario
  // res.write('Hola, ya se usar http de NodeJS');

res.end();
}

// Creamos server
http.createServer(router).listen(3000);

console.log(`Escuchando http en el puerto 3000`);