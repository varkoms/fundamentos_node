console.log('Basic Log');

// Para manejo de errores
console.error('Something went wrong');

// Advertencias
console.warn('WARNING');

// Table
// Shows info in a beautiful table
let tabla = [
  {
    a: 1,
    b: '2'
  },
  {
    a: 2,
    b: 'Another'
  }
]

console.table(tabla);

// Agrupar logs
// Se pueden agrupar groups anidados

console.group(`Conversacion`);
console.log(`Hola`);
console.group('Blah');
console.log(`Blah blah blah`);
console.log(`Blah blah blah`);
console.log(`Blah blah blah`);
console.log(`Blah blah blah`);
console.log(`Blah blah blah`);
console.log(`Blah blah blah`);
console.groupEnd('Blah');
console.log(`Adios`);
console.groupEnd('Conversacion');

// Caso de uso: funciones
const funcion1 = () => {
  console.group('Funcion 1');
  console.log('Esto es de la funcion 1');
  console.log('Esto tambien');
  console.log('Esto tambien');
  funcion2()
  console.log('Volvimos a la funcion 1');
  console.groupEnd('Funcion 1');
}

const funcion2 = () => {
  console.group('Funcion 2');
  console.log('Y ahora estamos en la funcion 2');
  console.log('funcion 2');
  console.groupEnd('Funcion 2')
}

console.log('Empezamos');
funcion1();
console.log('Fin');

// Contador
console.count('times');
console.count('times');
console.count('times');
console.count('times');
console.count('times');
console.countReset('times'); // Reset del count
console.count('times');
console.count('times');
console.count('times');