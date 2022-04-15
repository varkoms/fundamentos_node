console.log('Hola Mundo');

let i = 0;
setInterval(() => {
  console.log(i);
  i++;

  if(i === 5 ) {
    var a = 3 + z; // ReferenceError: z is not defined
  }
}, 1000);

console.log('Segunda instruccion');