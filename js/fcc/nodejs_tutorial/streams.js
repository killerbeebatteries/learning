const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('example_stream.txt', 'utf8');

/*
const writeStream = fs.createWriteStream('example_stream_new.txt');

readStream.on('data', (chunk) => {

	//console.log(chunk);
	writeStream.write(chunk);

});

*/

// same as above, but using a pipe
// like Dr Who and the Tartus...
//readStream.pipe(writeStream);

// transform stream (streams in disguise).
/*
const gzip = zlib.createGzip();
const writeAnotherStream = fs.createWriteStream('example_stream_new.txt.gz');
readStream.pipe(gzip).pipe(writeAnotherStream);

*/

// now gunzip
/*
const gunzip = zlib.createGunzip();
const writeYetAnotherStream = fs.createWriteStream('example_uncompressed.txt');
const readAnotherStream = fs.createReadStream('example_stream_new.txt.gz');
readAnotherStream.pipe(gunzip).pipe(writeYetAnotherStream);
*/
