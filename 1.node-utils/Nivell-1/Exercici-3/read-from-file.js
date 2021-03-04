// Nivell 1
// Exercici 3
// Creu una altra que imprimeixi per pantalla el que llegeixi d'un fitxer.
const fs = require("fs");
const filename = "something-to-read.txt";

const text = fs.readFileSync(filename, "utf8");

console.log(text);
