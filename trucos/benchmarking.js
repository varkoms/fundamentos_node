let suma = 0;

console.time('suma')

for (let i = 0; i < 100000000; i++) {
  suma += 1;
}

console.timeEnd('suma');

console.time('suma + 2')

for (let i = 0; i < 100000000; i++) {
  suma += 100;
}

console.timeEnd('suma + 2');

function asincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Termina el proceso asincrono');
      resolve();
    });
  })
}

console.time('asincrono');
asincrona()
  .then(() => console.timeEnd('asincrono'))