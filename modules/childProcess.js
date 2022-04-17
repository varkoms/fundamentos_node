// Child Process

const { exec, spawn } = require('child_process');

exec('exa --icons -lh', (err, stdout) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

let proceso = spawn('exa', [
  '--icons',
  '-lh'
]);

// Prints process id
console.log(proceso.pid);

// Prints if process is connected
console.log(proceso.connected);

// Verify if process is active or not
// and prints stdout of proceso
proceso.stdout.on('data', (dato) => {
  console.log(`Is active? ${proceso.killed}`);
  console.log(dato.toString());
})

// When process is exit, prints 'Proceso terminado' 
// and verify process status.
proceso.on('exit', () => {
  console.log(`Proceso terminado`);
  console.log(proceso.killed);
})