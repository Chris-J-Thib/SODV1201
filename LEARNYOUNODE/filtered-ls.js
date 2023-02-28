const fs = require('fs');
const path = process.argv[2];
const ext = process.argv[3];
fs.readdir(path,(err,files)=>{
    if(err){
        console.log(err);
        return;
    }
    for (let index = 0; index < files.length; index++) {
        if(files[index].split(".").length >= 2){
            if(files[index].split(".").at(-1) == ext) console.log(files[index]); 
        }     
    }
})