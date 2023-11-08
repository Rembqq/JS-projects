const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./docs/lorem_ipsum.txt');
const writeStream = fs.createWriteStream('./docs/new-text.txt');
const compressStream = zlib.createGzip();
const decompressStream = zlib.createGunzip();

//// Read and Write
// readStream.on('data', (chunk) => {
//     writeStream.write('\n---CHUNK START---\n');
//     writeStream.write(chunk);
//     writeStream.write('\n---CHUNK END---\n');
//     // console.log('---------');
//     // console.log(chunk.toString());
// });

const handleError = () => {
    console.log('Error');
    readStream.destroy();
    writeStream.end('Finished with error...');
}

readStream
  .on('error', handleError)
  .pipe(compressStream)
  .pipe(decompressStream)
  .pipe(writeStream)
  .on('error', handleError);