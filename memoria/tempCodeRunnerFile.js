const Transform = stream.Transform;

function Mayus() {
  Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb){
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
}

let mayus = new Mayus();
readableStream.pipe(mayus).pipe(process.stdout);