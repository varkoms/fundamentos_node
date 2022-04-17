// Errores (try/catch)

const anotherFunction = () => {
  return seRompe();
}

// ReferenceError: z is not defined
const seRompe = () => {
  return 3 + z;
}

// Para funciones asincronas, los errores deben
// de ser manejados dentro de la funcion asincrona y no afuera
const seRompeAsync = () => {
  setTimeout(() => {
    try {
      return 4 + y;
    } catch (error) {
      console.error(`Esto salio mal > ${error}`);
    }
  }, 1000);
}

// Llamada de funcion sincrona
try {
  seRompe();
} catch (error) {
  console.error(`Esto salio mal > ${error}`);
  console.log(`Pero no pasa nada, lo hemos capturado`);
}

seRompeAsync();

// console.log(`Esto de aqui esta al final`);