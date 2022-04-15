console.log('Hola Mundo');

// setInterval: Permite ejecutar una función cada n cantidad de tiempo, por lo que quiere que recibe como argumentos: Función a ejecutarse, intervalo de tiempo.
// A tener  en cuenta esta función no se detiene y continúa su ejecución ad infinitum.
// Detener ejecución con ctrl+ alt + m en Run Code, o con Ctrl +c en la terminal.

let i = 0;
setInterval(() => {
  console.log(i);
  i++;

  if (i === 5) {
    var a = 3 + z; // ReferenceError: z is not defined
  }
}, 1000); // Esta instrucción es asíncrona, por lo que se ejecuta en n momento.

console.log('Segunda instruccion');

// Al ser monohilo, el peligro recae en que si el código se ejectua y no tenemos cuidado el no asignar una variable de manera correcta me puede arrojar un error.
// Hay que escuchar los errores, es muy imporante de todo lo que pase en el código. Comprobar funciones y revisar lo que posiblmente puede fallar.
// Es clave estar pendiente de todos los errores que pueda cortar la ejecución, lo que se corta corta todo.
// Todo lo que sea asíncono y lo pueda llevar a ello, pues llevarlo, y todo lo que no, revisar que no corte el programa.