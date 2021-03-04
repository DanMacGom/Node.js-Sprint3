// Nivell 1
// Exercici 2
// Creu una funció que, en executar-la, escrigui el seu nom en un fitxer.
const fs = require("fs");

const fancy_function_name = function(){}
const filename = "function-name.txt"

fs.writeFile("./" + filename, fancy_function_name.name, function(err) {
  if (err) {
    console.log(err);
  }

  console.log(`${fancy_function_name.name} was written in file ${filename}.`);
})
