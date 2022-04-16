// Variables Globales

console.log(global);
console.log(setInterval);

// clearInterval y setInterval son metodos globales
let i = 0;
let intervalo = setInterval(() => {
  console.log(`Hola`);
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
}, 1000);

setImmediate(() => {
  console.log(`Hola`);
});