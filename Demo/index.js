const fs = require('fs');
const path = require("path");
let inputFile = path.join(__dirname, "input.txt")

let contents = fs.readFileSync(inputFile).toString();

console.log(contents);

