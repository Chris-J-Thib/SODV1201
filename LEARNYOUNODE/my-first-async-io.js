const fs = require('fs');
const path = process.argv[2];
let count = 0;
let text = fs.readFile(path,(err, data)=>{
    if(err) console.log(err);
    else console.log(data.toString().split("\n").length -1)
});
