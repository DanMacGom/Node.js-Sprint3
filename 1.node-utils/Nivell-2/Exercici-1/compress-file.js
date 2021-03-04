// Nivell 2
// Exercici 1
// Creu una funció que comprimeixi el file del nivell 1.
const zlib = require("zlib");
const fs = require("fs");

const zip = zlib.createGzip();

const filename_in = "../../Nivell-1/Exercici-3/something-to-read.txt";
const filename_out = "something-to-read.txt.gz";

const read = fs.createReadStream(filename_in);
const write = fs.createWriteStream(filename_out)

read.pipe(zip).pipe(write);

console.log(`Zipped ${filename_out} successfully.`)
