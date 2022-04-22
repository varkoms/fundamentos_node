// Guardar el abecedario en un buffer
buffer = Buffer.alloc(26);
for (let i = 0; i < buffer.length; i++) {
  buffer[i] = i + 97;  
}

console.log(buffer);
console.log(buffer.toString());