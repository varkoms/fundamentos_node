const hola = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    }, 1500);
  })
}

const hablar = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hablando con ${nombre}`);
      reject('Error');
      resolve(nombre);
    }, 1000);
  })
}

const adios = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve(nombre);
    }, 1000);
  })
}

// ...
console.log(`Iniciando proceso`);
hola('Cesar')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(adios)
  .catch(error => {
    console.log(new Error(error));
  });