const fs = require('fs');
const path = process.argv[2];
let count = 0;
let text = fs.readFileSync(path).toString();
let lines = text.split("\n");
console.log(lines.length-1);