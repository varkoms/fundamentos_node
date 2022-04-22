// Los buffers almacenan los datos en crudo, es decir, no es necesario 
// especificar el tipo de dato.

// Almacenar un byte vacio de informacion
let buffer = Buffer.alloc(1);

console.log(buffer); // <Buffer 00>

// Almacenando 5 bytes vacios de informacion
buffer = Buffer.alloc(5);
console.log(buffer);// <Buffer 00 00 00 00 00>

// Almacenando datos en buffer
buffer = Buffer.from([1, 2, 3, 10]);
console.log(buffer); // <Buffer 01 02 03 04>

buffer = Buffer.from('TheVarkoMS');
console.log(buffer); // <Buffer 54 68 65 56 61 72 6b 6f 4d 53>
console.log(buffer.toString()); // TheVarkoMS

// Guardar el abecedario en un buffer
buffer = Buffer.alloc(26);
for (let i = 0; i < buffer.length; i++) {
  buffer[i] = i + 97;  
}

console.log(buffer);
console.log(buffer.toString());