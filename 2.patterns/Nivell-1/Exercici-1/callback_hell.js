const fs = require("fs");
const { join } = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str => str.split("").reverse().join("");

const getFiles = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(inbox, (err, fl) => {
      if (err) {
        reject("Error: Folder inaccessible")
      } else {
        console.log(`Files are: ${fl}`)
        resolve(fl);
      }
    });
  });
}

const readFiles = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(join(inbox, file), "utf8", (err, data) => {
      if (err) {
        reject("Error: File error");
      } else {
        console.log(`${file} was read`)
        resolve(data);
      }
    });

  });
}

const writeFiles = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(join(outbox, file), reverseText(data), err => {
      if (err) {
        reject("Error: File could not be saved");
      } else {
        resolve(console.log(`${file} was successfully saved in the outbox!`));
      }
    });
  });
}

getFiles()
  .then(files => files.forEach(
    file => {
      readFiles(file);
    }
  ))
  .then(data => writeFiles(outbox, data))
  .catch(err => console.log(err));
