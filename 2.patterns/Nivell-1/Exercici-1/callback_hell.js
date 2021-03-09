const fs = require("fs");
const { join } = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str => str.split("").reverse().join("");

// Read and reverse contents of text files in a directory
// fs.readdir(inbox, (error, files) => {
//   if (error) {
//     return console.log("Error: Folder inaccessible");
//   }
//
//   files.forEach(file => {
//     fs.readFile(join(inbox, file), "utf8", (error, data) => {
//       if (error) {
//         return console.log("Error: File error");
//       }
//
//       fs.writeFile(join(outbox, file), reverseText(data), error => {
//         if (error) {
//           return console.log("Error: File could not be saved!");
//         }
//
//         console.log(`${file} was successfully saved in the outbox!`);
//       });
//     });
//   });
// });
