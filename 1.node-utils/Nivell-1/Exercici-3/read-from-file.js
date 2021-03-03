const fs = require("fs");
const filename = "something-to-read.txt";

const text = fs.readFileSync(filename, "utf8");

console.log(text);
