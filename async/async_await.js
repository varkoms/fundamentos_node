// Convertir promesas en async/await

const hola = async (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    }, 1500);
  })
}

const hablar = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Blah, blah, blah`);
      resolve();
    }, 1000);
  })
}

const adios = async (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve(nombre);
    }, 1000);
  })
}

async function main() {
  console.log(`Iniciando proceso`);
  let nombre = await hola('Cesar');
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log(`Terminando proceso`);
}

main();