// File System

// Importar la libreria 'fs', la cual ya viene incorporada en Node
const { log } = require('console');
const fs = require('fs');

// Creamos una arrow function para leer el contenido del archivo
const leer = (ruta) => {
  fs.readFile(ruta, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  })
}

// Metodo para escribir
const escribir = (ruta, data) => {
  fs.writeFile(ruta, data, (err) => {
    if(err) {
      console.error(err);
      return;
    }
    console.log('Archivo escrito correctamente');
    console.log(`Contenido del archivo: ${fs.readFileSync(ruta, "utf8")}`);
  })
}

const borrar = (path) => {
  fs.unlink(path, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Archivo "${path.toString()}" borrado correctamente`);
  })
}

leer(__dirname + '/archivo.txt');
escribir(__dirname + '/archivo1.txt', 'This is a new file');
borrar(__dirname + '/archivo1.txt');