const { log } = require('console');
const os = require('os');

// Arquitectura
console.log(`Arquitectura: ${os.arch()}`);

// Plataforma
console.log(`Plataforma: ${os.platform()}`);

// CPUS
console.log(os.cpus());

// Constantes
console.log(os.constants);

// RAM Libre
// console.log(os.freemem());

// RAM libre en diferentes tamanios
const SIZE = 1024;

const kb = (bytes) => Math.floor(bytes / SIZE);

const mb = (bytes) => Math.floor(kb(bytes) / SIZE);

const gb = (bytes) => Math.floor(mb(bytes) / SIZE);

// Memoria disponible
console.log(`========= DISPONIBLE =========`);
console.log(`${os.freemem()} bytes`);
console.log(`${kb(os.freemem())} KB`);
console.log(`${mb(os.freemem())} MB`);
console.log(`${gb(os.freemem())} GB`);

// Memoria total
console.log(`========= TOTAL =========`);
console.log(`${os.totalmem()} bytes`);
console.log(`${kb(os.totalmem())} KB`);
console.log(`${mb(os.totalmem())} MB`);
console.log(`${gb(os.totalmem())} GB`);

// Memoria Total del sistema
console.log(os.totalmem());

// Directorio Home
console.log(os.homedir());

// Directorio temporal default del sistema operativo
console.log(os.tmpdir());

// Host del SO - Util en servidores
console.log(os.hostname());

// Saber todas las interfaces de red
// console.log(os.networkInterfaces());